/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateParentsDto } from 'src/dto/create-parents.dto';
import { UpdateParentsDto } from 'src/dto/update-parents.dto';
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
