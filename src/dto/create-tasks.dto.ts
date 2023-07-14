import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTasksDto {

    @IsNumber()
    @IsNotEmpty()
    readonly id_tasks: number;

    @IsString()
    @IsNotEmpty()
    readonly task_tasks: string;

    @IsNumber()
    @IsNotEmpty()
    readonly id_parents: number;

    @IsNumber()
    @IsNotEmpty()
    readonly id_children: number;

    @IsBoolean()
    @IsNotEmpty()
    readonly active_tasks: boolean;

    @IsBoolean()
    @IsNotEmpty()
    readonly done_tasks: boolean;

    @IsNumber()
    @IsNotEmpty()
    readonly coins_tasks: number;
}