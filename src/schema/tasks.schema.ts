import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'tasks' })
export class Tasks {


    @Prop()
    task_tasks: string;

    @Prop()
    id_parents: string;

    @Prop()
    id_children: string;

    @Prop()
    active_tasks: boolean;

    @Prop()
    done_tasks: boolean;

    @Prop()
    coins_tasks: number;

}
export const TasksSchema = SchemaFactory.createForClass(Tasks);