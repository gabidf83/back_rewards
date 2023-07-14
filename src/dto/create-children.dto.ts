import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateChildrenDto {
    @IsNumber()
    @IsNotEmpty()
    readonly id_children: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly username_children: string;

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly password_children: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email_children: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name_children: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly surname_children: string;

    @IsString()
    @IsNotEmpty()
    readonly date_of_birth_children: Date;

    @IsArray()
    @IsNotEmpty()
    readonly id_parents: Array<number>;

    @IsNumber()
    @IsNotEmpty()
    readonly coins_children: number;
}