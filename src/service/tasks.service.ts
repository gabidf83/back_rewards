/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { deepStrictEqual } from 'assert';
import { Model } from 'mongoose';
import { CreateTasksDto } from 'src/dto/create-tasks.dto';
import { UpdateTasksDto } from 'src/dto/update-tasks.dto';
import { ITasks } from 'src/interface/tasks.interface';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Tasks') private tasksModel: Model<ITasks>) {}

    async createTasks(createTasksDto: CreateTasksDto): Promise<ITasks> {
        const newTasks = await new this.tasksModel(createTasksDto);
        return newTasks.save();
    }

    async updateTasks(tasksId: number, updateTasksDto: UpdateTasksDto): Promise<ITasks> {
        const existingTasks = await this.tasksModel.findByIdAndUpdate(tasksId, updateTasksDto, {
            new: true
        });
        if(!existingTasks) {
            throw new NotFoundException(`Tasks #${tasksId} not found`);
        }
        return existingTasks;
    }

    async getAllTasks(): Promise<ITasks[]> {
        const tasksData = await this.tasksModel.find();
        if(!tasksData || tasksData.length==0) {
            throw new NotFoundException('Tasks data not found');
        }
        return tasksData;
    }

    async getTasks(tasksId: number): Promise<ITasks> {
        const existingTasks = await this.tasksModel.findById(tasksId).exec();
        if(!existingTasks) {
            throw new NotFoundException(`Tasks #${tasksId} not found`);
        }
        return existingTasks;
    }

    async deleteTasks(tasksId: number): Promise<ITasks> {
        const deletedTasks = await this.tasksModel.findByIdAndDelete(tasksId);
        if(!deletedTasks) {
            throw new NotFoundException(`Tasks #${tasksId} not found`);
        }
        return deletedTasks;
    }
}
