import { Body, Controller, Post, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from "../../user/service/user.service";
import { hashPassword } from "../../shared/functions/hash-password";
import { CreateUserDto } from "../../user/dto/create-user.dto";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../service/auth.service";
import { User } from "../../user/entity/user.entity";


@Controller('auth')
export class AuthController {

    constructor(
        private readonly _userService: UserService,
        private readonly _authService: AuthService
    ) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    public async login(@Request() req, @Query() query)
    {
        // We need to remove the User Guest that might have been created
        if (('id' in query) && (req.user.id != query.id)) {
            const user = await this._userService.getOne(query.id, {});
            if (user.is_guest) {
                await this._userService.removeUserById(user);
            }
        }

        //If the request pass the guard passport then call the JWT function to generate JWT Token
        return this._authService.loginJwt(req.user);
    }

    @Post('/register')
    @UsePipes(new ValidationPipe({ transform: true }))
    public async register(@Body() body: CreateUserDto, @Query() query)
    {
        // When a user register we might get the localstorage to get the data that are already store
        // But if we pass directly by Postman we don't have a guest user, so we return an error
        if (!query || !query.id) {
            return {error: "No localstorage passed"};
        }
        const userGuest: User = await this._userService.getUserById(query.id);

        if (!("is_guest" in userGuest)) {
            return {error: "This user is bugged"};
        }

        // If user is not a guest then we stop here
        if (!userGuest.is_guest) {
            return {error: "This User is not register as a guest user"};
        }

        // Get a user that have this email
        const userWithSameEmail = await this._userService.getUserByParam({where: {email: body.email}})
        if (userWithSameEmail) {
            return {error: "This Email has already been used"};
        }

        // Hash the password
        body.password = await hashPassword(body.password);

        return await this._userService.updateGuestIntoUser(body, userGuest.id);
    }
}
