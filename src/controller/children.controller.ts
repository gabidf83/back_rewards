/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateChildrenDto } from 'src/dto/create-children.dto';
import { UpdateChildrenDto } from 'src/dto/update-children.dto';
import { IChildren } from 'src/interface/children.interface';
import { ChildrenService } from 'src/service/children.service';

@Controller('children')
export class ChildrenController {
    constructor(private readonly childrenService: ChildrenService){}

    @Post()
    async createChildren(@Res() response, @Body() createChildrenDto: CreateChildrenDto){
        try{
            const newChildren = await this.childrenService.createChildren(createChildrenDto);
            return response.status(HttpStatus.CREATED).json({
                newChildren,
            });
        } catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400, message: 'Error: Children not created', error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateChildren(@Res() response, @Param('id') childrenId: string, @Body() updateChildrenDto: UpdateChildrenDto){
        try{
            const existingChildren = await this.childrenService.updateChildren(childrenId, updateChildrenDto);
            return response.status(HttpStatus.OK).json({
                existingChildren,
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
                childrenData,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getChildren(@Res() response, @Param('id') childrenId: string){
        try{
            const existingChildren = await this.childrenService.getChildren(childrenId);
            return response.status(HttpStatus.OK).json({
                existingChildren,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Post('login')
    async getChildrenByUsernameAndPassword(
        @Body() credentials: { username_children: string; password_children: string },
    ): Promise<IChildren> {
        try {
            const parent = await this.childrenService.getChildrenByUsernameAndPassword(
                credentials.username_children,
                credentials.password_children,
            );
            return parent;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Children not found for the given username and password');
            }
            throw error;
        }
    }

    @Delete('/:id')
    async deleteChildren(@Res() response, @Param('id') childrenId: string){
        try{
            const deletedChildren = await this.childrenService.deleteChildren(childrenId);
            return response.status(HttpStatus.OK).json({
                deletedChildren,
            });
        } catch(err) {
            return response.status(err.status).json(err.response);
        }
    }
}
