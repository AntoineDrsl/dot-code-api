import { IsString } from "class-validator";
import { ModeEnum } from "../enums/mode.enum";

export class UpdateRoomModeDto {
    @IsString()
    public readonly mode: ModeEnum;
}