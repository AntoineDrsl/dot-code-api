import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    public readonly pseudo: string;

    @IsEmail()
    @IsNotEmpty()
    public readonly email: string;

    @IsString()
    @IsNotEmpty()
    public password: string;
}