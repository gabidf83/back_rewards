import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTasksDto {

    @IsString()
    @IsNotEmpty()
    readonly task_tasks: string;

    @IsString()
    @IsNotEmpty()
    readonly id_parents: string;

    @IsString()
    @IsNotEmpty()
    readonly id_children: string;

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