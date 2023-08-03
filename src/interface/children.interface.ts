import { Document } from 'mongoose';

export interface IChildren extends Document{
    readonly username_children: string;
    readonly password_children: string;
    readonly email_children: string;
    readonly name_children: string;
    readonly surname_children: string;
    readonly date_of_birth_children: string;
    readonly id_parents: Array<string>;
    readonly coins_children: number;
}