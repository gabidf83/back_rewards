import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ collection: 'rewards' })
export class Rewards {

    @Prop()
    reward_rewards: string;
    @Prop()
    id_parents: string;
    @Prop()
    id_children: string;
    @Prop()
    coins_rewards: number;
    @Prop()
    active_rewards: boolean;
    @Prop()
    received_rewards: boolean;
}
export const RewardsSchema = SchemaFactory.createForClass(Rewards);