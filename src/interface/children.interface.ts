import { Document } from 'mongoose';

export interface IChildren extends Document{
    readonly id_children: number;
    readonly username_children: string;
    readonly password_children: string;
    readonly email_children: string;
    readonly name_children: string;
    readonly surname_children: string;
    readonly date_of_birth_children: string;
    readonly id_parents: Array<number>;
    readonly coins_children: number;
}