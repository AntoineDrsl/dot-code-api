import { IsNumber } from "class-validator";

export class ConnectInRoomUserDto {
    @IsNumber()
    public readonly room_id: number;
}
