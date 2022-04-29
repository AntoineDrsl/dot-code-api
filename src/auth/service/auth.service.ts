import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from "../../user/service/user.service";
import * as bcrypt from 'bcrypt';
import { User } from "../../user/entity/user.entity";
import { JwtService } from "@nestjs/jwt";
import { PayloadInterface } from "../models/payload.interface";

@Injectable()
export class AuthService {

    constructor(
        private readonly _userService: UserService,
        private readonly _jwtService: JwtService
    ) {
    }

    /**
     * Get user in database and compare his password with the one given
     *
     * @param email
     * @param password
     */
    public async validateUser(email: string, password: string): Promise<any>
    {
        // Get User from service
        const user: User = await this._userService.getUserByParam({
            where: {email: email}
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const compared = await bcrypt.compare(password, user.password);
        if (!compared) {
            return {msg: 'Mot de passe invalide'};
        }
        return user;
    }

    /**
     * Return a JWT Token
     *
     * @param user
     */
    public async loginJwt(user: User)
    {
        const payload: PayloadInterface = { email: user.email, id: user.id, slug: user.slug };
        return {
            id: user.id,
            access_token: this._jwtService.sign(payload)
        };
    }
}
