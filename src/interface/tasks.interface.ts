import { Document } from 'mongoose';

export interface ITasks extends Document{

    readonly task_tasks: string;
    readonly id_parents: string;
    readonly id_children: string;
    readonly active_tasks: boolean;
    readonly done_tasks: boolean;
    readonly coins_tasks: number;
}