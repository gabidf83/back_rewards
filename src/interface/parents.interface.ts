import { Document } from 'mongoose';

export interface IParents extends Document{
    readonly id_parents: number;
    readonly username_parents: string;
    readonly password_parents: string;
    readonly name_parents: string;
    readonly surname_parents: string;
    readonly date_of_birth_parents: string;
    readonly id_children: Array<number>;
    readonly email_parents: string;
}