import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly _authService: AuthService
    ) {
        // The fields that must be passed are email and password
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }

    /**
     * Not sure about this function but it seems to be linked by Passport when passing in the guard
     *
     * @param email
     * @param password
     */
    public async validate(email: string, password: string)
    {
        const user = await this._authService.validateUser(email, password);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}