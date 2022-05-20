import { IsNotEmpty, IsString } from 'class-validator';
import { IsNumber } from 'class-validator';

export class CreateRoomDto {
    @IsNumber()
    public owner_id;
}