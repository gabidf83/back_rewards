/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRewardsDto } from 'src/dto/create-rewards.dto';
import { UpdateRewardsDto } from 'src/dto/update-rewards-dto';
import { IRewards } from 'src/interface/rewards.interface';

@Injectable()
export class RewardsService {
    constructor(@InjectModel('Rewards') private rewardsModel: Model<IRewards>) {}

    async createRewards(createRewardsDto: CreateRewardsDto): Promise<IRewards> {
        const newRewards = await new this.rewardsModel(createRewardsDto);
        return newRewards.save();
    }

    async updateRewards(rewardsId: number, updateRewardsDto: UpdateRewardsDto): Promise<IRewards> {
        const existingRewards = await this.rewardsModel.findByIdAndUpdate(rewardsId, updateRewardsDto, {new: true});
        if(!existingRewards){
            throw new NotFoundException(`Rewards #${existingRewards} not found`);
        }
        return existingRewards;
    }

    async getAllRewards(): Promise<IRewards[]> {
        const rewardsData = await this.rewardsModel.find();
        if(!rewardsData || rewardsData.length==0){
            throw new NotFoundException('Rewards data not found');
        }
        return rewardsData;
    }

    async getRewards(rewardsId: number): Promise<IRewards> {
        const existingRewards = await this.rewardsModel.findById(rewardsId).exec();
        if(!existingRewards){
            throw new NotFoundException(`Rewards #${rewardsId} not found`);
        }
        return existingRewards;
    }

    async deleteRewards(rewardsId: number): Promise<IRewards> {
        const deletedRewards = await this.rewardsModel.findByIdAndDelete(rewardsId);
        if(!deletedRewards){
            throw new NotFoundException(`Rewards #${rewardsId} not found`);
        }
        return deletedRewards;
    }
}
