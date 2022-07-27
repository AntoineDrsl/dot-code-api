import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstant } from '../constant/jwt-constant';
import { PayloadInterface } from "../models/payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstant.jwtSecret,
        });
    }

    public async validate(payload: PayloadInterface) {
        return { id: payload.id, email: payload.email, slug: payload.slug };
    }
}