/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateChildrenDto } from 'src/dto/create-children.dto';
import { UpdateChildrenDto } from 'src/dto/update-children.dto';
import { ChildrenService } from 'src/service/children.service';

@Controller('children')
export class ChildrenController {
    constructor(private readonly childrenService: ChildrenService){}

    @Post()
    async createChildren(@Res() response, @Body() createChildrenDto: CreateChildrenDto){
        try{
            const newChildren = await this.childrenService.createChildren(createChildrenDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Children has been created succesfully', newChildren,
            });
        } catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400, message: 'Error: Children not created', error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateChildren(@Res() response, @Param('id') childrenId: number, @Body() updateChildrenDto: UpdateChildrenDto){
        try{
            const existingChildren = await this.childrenService.updateChildren(childrenId, updateChildrenDto);
            return response.status(HttpStatus.OK).json({
                message: 'Children has been successfully updated', existingChildren,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getAllChildren(@Res() response){
        try{
            const childrenData = await this.childrenService.getAllChildren();
            return response.status(HttpStatus.OK).json({
                message: 'All children data found successfully', childrenData,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getChildren(@Res() response, @Param('id') childrenId: number){
        try{
            const existingChildren = await this.childrenService.getChildren(childrenId);
            return response.status(HttpStatus.OK).json({
                message: 'Children found successfully', existingChildren,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteChildren(@Res() response, @Param('id') childrenId: number){
        try{
            const deletedChildren = await this.childrenService.deleteChildren(childrenId);
            return response.status(HttpStatus.OK).json({
                message: 'Children deleted successfully', deletedChildren,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }
}