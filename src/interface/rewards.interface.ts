import { Document } from "mongoose";


export interface IRewards extends Document {
    readonly id_rewards: number;
    readonly reward_rewards: string;
    readonly id_parents: number;
    readonly id_children: number;
    readonly coins_rewards: number;
    readonly active_rewards: boolean;
    readonly received_rewards: boolean;
}
