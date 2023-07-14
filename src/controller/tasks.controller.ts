/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateTasksDto } from 'src/dto/create-tasks.dto';
import { UpdateTasksDto } from 'src/dto/update-tasks.dto';
import { TasksService } from 'src/service/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async createTasks(@Res() response, @Body() createTasksDto: CreateTasksDto) {
        try {
            const newTasks = await this.tasksService.createTasks(createTasksDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Tasks has been created successfully',
                newTasks,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Tasks not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateTasks(@Res() response, @Param('id') tasksId: number,
        @Body() updateTasksDto: UpdateTasksDto) {
        try {
            const existingTasks = await this.tasksService.updateTasks(tasksId, updateTasksDto);
            return response.status(HttpStatus.OK).json({
                message: 'Tasks has been successfully updated',
                existingTasks,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get()
    async getAllTasks(@Res() response) {
        try {
            const tasksData = await this.tasksService.getAllTasks();
            return response.status(HttpStatus.OK).json({
                message: 'All tasks data found successfully', tasksData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getTasks(@Res() response, @Param('id') tasksId: number) {
        try {
            const existingTasks = await
                this.tasksService.getTasks(tasksId);
            return response.status(HttpStatus.OK).json({
                message: 'Tasks found successfully', existingTasks,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteTasks(@Res() response, @Param('id') tasksId: number) {
        try {
            const deletedTasks = await this.tasksService.deleteTasks(tasksId);
            return response.status(HttpStatus.OK).json({
                message: 'Tasks deleted successfully',
                deletedTasks,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
