/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateRewardsDto } from 'src/dto/create-rewards.dto';
import { UpdateRewardsDto } from 'src/dto/update-rewards-dto';
import { RewardsService } from 'src/service/rewards.service';

@Controller('rewards')
export class RewardsController {
    constructor(private readonly rewardsService: RewardsService) {}

    @Post()
    async createRewards(@Res() response, @Body() createRewardsDto: CreateRewardsDto) {
        try{
            const newRewards = await this.rewardsService.createRewards(createRewardsDto);
            return response.status(HttpStatus.CREATED).json({
                newRewards
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                stattusCode: 400, message: 'Error: Rewards not created',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateRewards(@Res() response, @Param('id') rewardsId: string, @Body() updateRewardsDto: UpdateRewardsDto) {
        try {
            const existingRewards = await this.rewardsService.updateRewards(rewardsId, updateRewardsDto);
            return response.status(HttpStatus.OK).json({
                existingRewards
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getAllRewards(@Res() response) {
        try {
            const rewardsData = await this.rewardsService.getAllRewards();
            return response.status(HttpStatus.OK).json({
                rewardsData
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getRewards(@Res() response, @Param('id') rewardsId: string) {
        try {
            const existingRewards = await this.rewardsService.getRewards(rewardsId);
            return response.status(HttpStatus.OK).json({
                existingRewards,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteRewards(@Res() response, @Param('id') rewardsId: string) {
        try {
            const deletedRewards = await this.rewardsService.deleteRewards(rewardsId);
            return response.status(HttpStatus.OK).json({
                deletedRewards,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

}
