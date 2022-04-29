import { TeamService } from './../service/team.service';
import { CreateTeamDto } from './../dto/create-team.dto';
import { Delete, ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { Team } from '../entity/team.entity';
import { Body, Controller, Post, Get, Patch, Param } from '@nestjs/common';
import { TeamRepository } from "../repository/team.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('team')
export class TeamController {

    constructor(
        @InjectRepository(TeamRepository) 
        private readonly _teamService: TeamService
    ) {
    }
}
