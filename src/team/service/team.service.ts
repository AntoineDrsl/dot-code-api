import { Team } from './../entity/team.entity';
import { TeamRepository } from './../repository/team.repository';
import { CreateTeamDto } from './../dto/create-team.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { AddPointDto } from "../dto/add-point.dto";

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(TeamRepository)
        private readonly _teamRepository: TeamRepository
    ) {}

    public createTeams(createTeamDtoList: CreateTeamDto[]): Promise<Team[]>
    {
        return this._teamRepository.createTeams(createTeamDtoList);
    }

    public async getTeamById(id: number): Promise<Team>
    {
        const team = await this._teamRepository.findOne({ 
            where: { id }
        });

        if(!team) {
            throw new NotFoundException(`Team with ID "${id}" not found`);
        }

        return team;
    }

    public addPoint(id: number, addPointDto: AddPointDto) {
        return this._teamRepository.addPoint(id, addPointDto);
    }
}
