import { IsString } from "class-validator";

export class UpdateUserSocketDto {
    @IsString()
    public readonly socket_id: string;
}