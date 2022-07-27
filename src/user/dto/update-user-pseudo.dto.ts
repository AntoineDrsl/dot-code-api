import { IsString } from "class-validator";

export class UpdateUserPseudoDto {
    @IsString()
    public readonly pseudo: string;
}