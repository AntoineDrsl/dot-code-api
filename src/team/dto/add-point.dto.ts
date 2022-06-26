import { IsNotEmpty, IsNumber } from "class-validator";

export class AddPointDto {
    @IsNumber()
    @IsNotEmpty()
    points: number;
}