import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventGateway } from './gateways/event.gateway';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { GameModule } from './game/game.module';
import { TeamModule } from './team/team.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
      migrationsRun: false,
      logging: false,
      migrationsTableName: "migration",
      migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
      synchronize: false,
      cli: {
        migrationsDir: 'src/migration'
      },
      autoLoadEntities: true,
    }),

    RoomModule,
    UserModule,
    GameModule,
    TeamModule,
    AuthModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [AppService, EventGateway],
})
export class AppModule {}
