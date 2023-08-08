/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateParentsDto } from 'src/dto/create-parents.dto';
import { UpdateParentsDto } from 'src/dto/update-parents.dto';
import { IParents } from 'src/interface/parents.interface';
import { ParentsService } from 'src/service/parents.service';

@Controller('parents')
export class ParentsController {
    constructor(private readonly parentsService: ParentsService) { }

    @Post()
    async createParents(@Res() response, @Body() createParentsDto: CreateParentsDto) {
        try {
            const newParent = await this.parentsService.createParents(createParentsDto);
            return response.status(HttpStatus.CREATED).json({
                newParent,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Parent not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateParents(@Res() response, @Param('id') parentsId: string,
        @Body() updateParentsDto: UpdateParentsDto) {
        try {
            const existingParents = await this.parentsService.updateParents(parentsId, updateParentsDto);
            return response.status(HttpStatus.OK).json({
                existingParents,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getAllParents(@Res() response) {
        try {
            const parentsData = await this.parentsService.getAllParents();
            return response.status(HttpStatus.OK).json({
                parentsData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getParents(@Res() response, @Param('id') parentsId: string) {
        try {
            const existingParents = await
                this.parentsService.getParents(parentsId);
            return response.status(HttpStatus.OK).json({
                existingParents,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Post('login')
    async getParentsByUsernameAndPassword(
        @Body() credentials: { username_parents: string; password_parents: string },
    ): Promise<IParents> {
        try {
            const parent = await this.parentsService.getParentsByUsernameAndPassword(
                credentials.username_parents,
                credentials.password_parents,
            );
            return parent;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Parent not found for the given username and password');
            }
            throw error;
        }
    }

    @Delete('/:id')
    async deleteParents(@Res() response, @Param('id') parentsId: string) {
        try {
            const deletedParents = await this.parentsService.deleteParents(parentsId);
            return response.status(HttpStatus.OK).json({
                deletedParents,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
