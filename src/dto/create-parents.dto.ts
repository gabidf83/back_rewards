import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateParentsDto {
    @IsNumber()
    @IsNotEmpty()
    readonly id_parents: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly username_parents: string;

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly password_parents: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name_parents: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly surname_parents: string;

    @IsDate()
    @IsNotEmpty()
    readonly date_of_birth_parents: Date;

    @IsArray()
    @IsNotEmpty()
    readonly id_children: Array<number>;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email_parents: string;
}