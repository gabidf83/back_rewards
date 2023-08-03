import { Document } from "mongoose";


export interface IRewards extends Document {
    readonly reward_rewards: string;
    readonly id_parents: string;
    readonly id_children: string;
    readonly coins_rewards: number;
    readonly active_rewards: boolean;
    readonly received_rewards: boolean;
}
