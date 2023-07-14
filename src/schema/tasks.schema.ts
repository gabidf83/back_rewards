import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'tasks' })
export class Tasks {

    @Prop()
    id_tasks: number;

    @Prop()
    task_tasks: string;

    @Prop()
    id_parents: number;

    @Prop()
    id_children: number;

    @Prop()
    active_tasks: boolean;

    @Prop()
    done_tasks: boolean;

    @Prop()
    coins_tasks: number;

}
export const TasksSchema = SchemaFactory.createForClass(Tasks);