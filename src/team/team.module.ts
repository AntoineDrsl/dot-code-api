import { TeamService } from './service/team.service';
import { TeamController } from './controller/team.controller';
import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Team} from "./entity/team.entity";
import {TeamRepository} from "./repository/team.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Team, TeamRepository])],
    exports: [TypeOrmModule, TeamService],
    controllers: [TeamController],
    providers: [TeamService]
})
export class TeamModule {}
