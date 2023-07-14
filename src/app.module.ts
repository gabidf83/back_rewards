import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';
import { RewardsController } from './controller/rewards.controller';
import { RewardsService } from './service/rewards.service';
import { ChildrenController } from './controller/children.controller';
import { ChildrenService } from './service/children.service';
import { ParentsController } from './controller/parents.controller';
import { ParentsService } from './service/parents.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentsSchema } from './schema/parents.schema';
import { ChildrenSchema } from './schema/children.schema';
import { RewardsSchema } from './schema/rewards.schema';
import { TasksSchema } from './schema/tasks.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gabi:Vega_2018@rewards.dqgzgjq.mongodb.net/', { dbName: 'rewards' }),
    MongooseModule.forFeature([
      {
        name: 'Parents',
        schema: ParentsSchema
      },
      {
        name: 'Children',
        schema: ChildrenSchema
      },
      {
        name: 'Tasks',
        schema: TasksSchema
      },
      {
        name: 'Rewards',
        schema: RewardsSchema
      }
    ])
  ],
  controllers: [
        TasksController, 
    RewardsController,
    ChildrenController,
    ParentsController, AppController],
  providers: [
    TasksService,
    RewardsService,
    ChildrenService,
    ParentsService, AppService],
})
export class AppModule { }
