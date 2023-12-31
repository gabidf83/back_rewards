import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({collection: 'parents'})
export class Parents {

    @Prop()
    username_parents: string;
    @Prop()
    password_parents: string;
    @Prop()
    name_parents: string;
    @Prop()
    surname_parents: string;
    @Prop()
    date_of_birth_parents: string;
    @Prop()
    id_children: Array<string>;
    @Prop()
    email_parents: string;
}
export const ParentsSchema = SchemaFactory.createForClass(Parents);