import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ collection: 'rewards' })
export class Rewards {
    @Prop()
    id_rewards: number;
    @Prop()
    reward_rewards: string;
    @Prop()
    id_parents: number;
    @Prop()
    id_children: number;
    @Prop()
    coins_rewards: number;
    @Prop()
    active_rewards: boolean;
    @Prop()
    received_rewards: boolean;
}
export const RewardsSchema = SchemaFactory.createForClass(Rewards);