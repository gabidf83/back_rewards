import { ParentsController } from './controller/parents.controller';
import { ParentsService } from './service/parents.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentsSchema } from './schema/parents.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gabi:Vega_2018@rewards.dqgzgjq.mongodb.net/', { dbName: 'rewards' }),
    MongooseModule.forFeature([
      {
        name: 'Parents',
        schema: ParentsSchema
      },
      // {
      //   name: 'Children',
      //   schema: ChildrenSchema
      // },
      // {
      //   name: 'Tasks',
      //   schema: TasksSchema
      // },
      // {
      //   name: 'Rewards',
      //   schema: RewardsSchema
      // }
    ])
  ],
  controllers: [
    ParentsController, AppController],
  providers: [
    ParentsService, AppService],
})
export class AppModule { }
