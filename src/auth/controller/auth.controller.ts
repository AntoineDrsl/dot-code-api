import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Query,
    Request,
    Res,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
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
    public async register(@Body() body: CreateUserDto, @Query() query, @Res() res)
    {
        // When a user register we might get the localstorage to get the data that are already store
        // But if we pass directly by Postman we don't have a guest user, so we return an error
        if (!query || !query.id) {
            return {error: "No localstorage passed"};
        }

        // Get a user that have this email
        const userWithSameEmail = await this._userService.getUserByParam({where: {email: body.email}});
        if (userWithSameEmail) {
            return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                error: 'This email has already been used'
            });
        }

        const userGuest: User = await this._userService.getUserById(query.id);

        if (!("is_guest" in userGuest)) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: 'The user is does not have a guest field'
            });
        }

        // Hash the password
        body.password = await hashPassword(body.password);

        // If user is not a guest then we stop here
        if (!userGuest.is_guest) {
            return res.status(HttpStatus.CREATED).json({
                user: await this._userService.createUser(body)
            });
        }

        return res.status(HttpStatus.CREATED).json({
            user: await this._userService.updateGuestIntoUser(body, userGuest.id)
        });
    }
}
