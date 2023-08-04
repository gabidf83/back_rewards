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
    async updateTasks(@Res() response, @Param('id') tasksId: string,
        @Body() updateTasksDto: UpdateTasksDto) {
        try {
            const existingTasks = await this.tasksService.updateTasks(tasksId, updateTasksDto);
            return response.status(HttpStatus.OK).json({
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
                tasksData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getTasks(@Res() response, @Param('id') tasksId: string) {
        try {
            const existingTasks = await
                this.tasksService.getTasks(tasksId);
            return response.status(HttpStatus.OK).json({
                existingTasks,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    // Nueva ruta para obtener todas las tareas asociadas a un niño por su _id
    @Get('children/:childId')
    async getAllByChildrenId(@Res() response, @Param('childId') childId: string) {
        try {
            const tasksData = await this.tasksService.getAllByChildrenId(childId);
            return response.status(HttpStatus.OK).json({
                tasksData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteTasks(@Res() response, @Param('id') tasksId: string) {
        try {
            const deletedTasks = await this.tasksService.deleteTasks(tasksId);
            return response.status(HttpStatus.OK).json({
                deletedTasks,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
