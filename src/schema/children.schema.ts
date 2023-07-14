import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({collection: 'children'})
export class Children {
    @Prop()
    id_children: number;
    @Prop()
    username_children: string;
    @Prop()
    password_children: string;
    @Prop()
    email_children: string;
    @Prop()
    name_children: string;
    @Prop()
    surname_children: string;
    @Prop()
    date_of_birth_children: string;
    @Prop()
    id_parents: Array<number>;
    @Prop()
    coins_children: number
}
export const ChildrenSchema = SchemaFactory.createForClass(Children);