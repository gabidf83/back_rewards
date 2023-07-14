import { PartialType } from "@nestjs/mapped-types";
import { CreateRewardsDto } from "./create-rewards.dto";


export class UpdateRewardsDto extends PartialType(CreateRewardsDto) {}