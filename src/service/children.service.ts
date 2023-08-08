/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChildrenDto } from 'src/dto/create-children.dto';
import { UpdateChildrenDto } from 'src/dto/update-children.dto';
import { IChildren } from 'src/interface/children.interface';

@Injectable()
export class ChildrenService {
    constructor(@InjectModel('Children') private childrenModel:Model<IChildren>) {}

    async createChildren(createChildrenDto: CreateChildrenDto):
    Promise<IChildren> {
        const newChildren = await new this.childrenModel(createChildrenDto);
        return newChildren.save();
    }

    async updateChildren(childrenId: string, updateChildrenDto: UpdateChildrenDto): Promise<IChildren> {
        const existingChildren = await this.childrenModel.findByIdAndUpdate(childrenId, updateChildrenDto, {new: true});
        if(!existingChildren){
            throw new NotFoundException(`Children #${childrenId} not found`);
        }
        return existingChildren;
    }

    async getAllChildren(): Promise<IChildren[]> {
        const childrenData = await this.childrenModel.find();
        if(!childrenData || childrenData.length==0) {
            throw new NotFoundException('Children data not found');
        }
        return childrenData;
    }

    async getChildren(childrenId: string): Promise<IChildren> {
        const existingChildren = await this.childrenModel.findById(childrenId).exec();
        if(!existingChildren){
            throw new NotFoundException(`Children #${childrenId} not found`);
        }
        return existingChildren;
    }

    async getChildrenByUsernameAndPassword(username_children: string, password_children: string): Promise<IChildren> {
        const existingChildren = await this.childrenModel.findOne({ username_children, password_children }).exec();
        
        if (!existingChildren) {
            throw new NotFoundException('Children not found for the given username and password');
        }
        
        return existingChildren;
    }

    async deleteChildren(childrenId: string): Promise<IChildren> {
        const deletedChildren = await this.childrenModel.findByIdAndDelete(childrenId);
        if(!deletedChildren){
            throw new NotFoundException(`Children #${childrenId} not found`);
        }
        return deletedChildren;
    }
}
