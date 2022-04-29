import { IsString } from "class-validator";

export class UpdateSocketUserDto {
    @IsString()
    public readonly socket_id: string;
}