import { IsNumber, IsNotEmpty, IsString, MaxLength, IsBoolean } from "class-validator";

export class CreateRewardsDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly reward_rewards: string;

    @IsString()
    @IsNotEmpty()
    readonly id_parents: string;

    @IsNumber()
    @IsNotEmpty()
    readonly id_children: string;

    @IsString()
    @IsNotEmpty()
    readonly coins_rewards: number;

    @IsBoolean()
    @IsNotEmpty()
    readonly active_rewards: boolean;

    @IsBoolean()
    @IsNotEmpty()
    readonly received_rewards: boolean;
}
