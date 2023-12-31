/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParentsDto } from 'src/dto/create-parents.dto';
import { UpdateParentsDto } from 'src/dto/update-parents.dto';
import { IParents } from 'src/interface/parents.interface';

@Injectable()
export class ParentsService {

    constructor(@InjectModel('Parents') private parentsModel: Model<IParents>) {}

    async createParents(createParentsDto: CreateParentsDto):
    Promise<IParents> {
        const newParents = await new this.parentsModel(createParentsDto);
        return newParents.save();
    }

    async updateParents(parentsId: string, updateParentsDto: UpdateParentsDto):
    Promise<IParents> {
        const existingParents = await
        this.parentsModel.findByIdAndUpdate(parentsId, updateParentsDto, {
            new: true
        });
        if(!existingParents) {
            throw new NotFoundException(`Parent #${parentsId} not found`);
        }
        return existingParents;
    }

    async getAllParents(): Promise<IParents[]> {
        const parentsData = await this.parentsModel.find();
        if(!parentsData || parentsData.length==0){
            throw new NotFoundException('Parents data not found');
        }
        return parentsData;
    }

    async getParents(parentsId: string): Promise<IParents> {
        const existingParents = await this.parentsModel.findById(parentsId).exec();
        if(!existingParents) {
            throw new NotFoundException(`Parent #${parentsId} not found`);
        }
        return existingParents;
    }

    async getParentsByUsernameAndPassword(username_parents: string, password_parents: string): Promise<IParents> {
        const existingParents = await this.parentsModel.findOne({ username_parents, password_parents }).exec();
        
        if (!existingParents) {
            throw new NotFoundException('Parent not found for the given username and password');
        }
        
        return existingParents;
    }

    async deleteParents(parentsId: string): Promise<IParents> {
        const deleteParents = await this.parentsModel.findByIdAndDelete(parentsId).exec();
        if(!deleteParents) {
            throw new NotFoundException(`Parent #${parentsId} not found`);
        }
        return deleteParents;
    }
}
