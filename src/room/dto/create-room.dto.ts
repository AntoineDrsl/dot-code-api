import { IsNumber } from 'class-validator';

export class CreateRoomDto {
    @IsNumber()
    public owner_id;
}