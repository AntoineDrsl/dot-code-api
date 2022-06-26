import { uuid } from 'uuidv4';
import { CreateTeamDto } from '../dto/create-team.dto';
import { EntityRepository, Repository } from "typeorm";
import { Team } from "../entity/team.entity";
import { AddPointDto } from "../dto/add-point.dto";

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> {

    public async createTeam(createTeamDto: CreateTeamDto): Promise<Team>
    {
        const { room, name } = createTeamDto;

        const team = this.create({
            slug: uuid(),
            room,
            name,
            points: 0
        });

        await this.save(team);
        return team;
    }

    public async createTeams(createTeamDtoList: CreateTeamDto[]): Promise<Team[]>
    {
        const queryRunner = this.manager.connection.createQueryRunner();
        const teams: Team[] = [];

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            createTeamDtoList.forEach(async (createTeamDto: CreateTeamDto) => {
                const { room, name } = createTeamDto;

                const team = this.create({
                    slug: uuid(),
                    room,
                    name,
                    points: 0
                });
                teams.push(team);

                await queryRunner.manager.save(team);
            });
        
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
            return teams;
        }
    }


    public async addPoint(id: number, addPointDto: AddPointDto) {
        const { points } = addPointDto;

        const team = this.create({
            points
        });

        return await this.update(id, team)
    }
}