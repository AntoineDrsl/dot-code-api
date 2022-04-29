import { IsString, IsNumber } from 'class-validator';

export class CreateTeamDto {
    @IsNumber()
    public readonly room;

    @IsString()
    public readonly name: string;
}