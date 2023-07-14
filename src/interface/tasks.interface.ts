import { Document } from 'mongoose';

export interface ITasks extends Document{
    readonly id_tasks: number;

    readonly task_tasks: string;

    readonly id_parents: number;

    readonly id_children: number;

    readonly active_tasks: boolean;

    readonly done_tasks: boolean;

    readonly coins_tasks: number;
}