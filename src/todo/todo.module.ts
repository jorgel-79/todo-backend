import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {todoSchema} from '../schema/todo.schema';
import {MongooseModule} from "@nestjs/mongoose"

@Module({
  imports: [
    MongooseModule.forFeature([{name:'todos',schema:todoSchema}])

  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
