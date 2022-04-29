import { IsString, IsNumber } from "class-validator";

export class UpdateUserTeamDto {
    @IsNumber()
    public readonly team_id: number;
}