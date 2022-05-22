import { TeamService } from '../service/team.service';
import { Body, Controller, Patch, Param } from '@nestjs/common';
import { TeamRepository } from "../repository/team.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { AddPointDto } from "../dto/add-point.dto";

@Controller('team')
export class TeamController {

    constructor(
        @InjectRepository(TeamRepository) 
        private readonly _teamService: TeamService
    ) {
    }

    @Patch(':id/add-point')
    public addPoint(@Param('id') id: number, @Body() addPoint: AddPointDto) {
        return this._teamService.addPoint(id, addPoint);
    }
}
