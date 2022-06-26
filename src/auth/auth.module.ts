import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { UserModule } from "../user/user.module";
import { LocalStrategy } from "./strategy/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from './controller/auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstant } from "./constant/jwt-constant";
import { JwtStrategy } from "./strategy/jwt-strategy";

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
      UserModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstant.jwtSecret,
        signOptions: { expiresIn: jwtConstant.jwtTime }
      })
  ],
  controllers: [AuthController]
})
export class AuthModule {}
