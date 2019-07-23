import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule} from "@nestjs/mongoose";
import { TallerModule } from './taller/taller.module';



@Module({
  imports: [TodoModule,
  MongooseModule.forRoot('mongodb://localhost:27017/cursoJs',{useNewUrlParser: true}),
  TallerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
