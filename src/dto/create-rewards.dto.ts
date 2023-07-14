import { IsNumber, IsNotEmpty, IsString, MaxLength, IsBoolean } from "class-validator";

export class CreateRewardsDto {
    @IsNumber()
    @IsNotEmpty()
    readonly id_rewards: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly reward_rewards: string;

    @IsNumber()
    @IsNotEmpty()
    readonly id_parents: number;

    @IsNumber()
    @IsNotEmpty()
    readonly id_children: number;

    @IsNumber()
    @IsNotEmpty()
    readonly coins_rewards: number;

    @IsBoolean()
    @IsNotEmpty()
    readonly active_rewards: boolean;

    @IsBoolean()
    @IsNotEmpty()
    readonly received_rewards: boolean;
}
