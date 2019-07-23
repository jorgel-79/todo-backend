import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'


@Injectable()
export class TodoService {
    constructor (@InjectModel('todos') private todoModel){}

    async newTodo(data:{}){
        let newTodo = new this.todoModel(data)
        return await newTodo.save()

    }


    async allFindTodo(){
         return this.todoModel.find({})

    }

    async FindTodoID(idTodo:string){
        return this.todoModel.find({_id:idTodo})
    } 
     
    async updateTodo(titleTodo:string, descrUpdate:string){
        return await this.todoModel.findOneAndUpdate({title:titleTodo},
            {$set:{descr:descrUpdate}}
            )

    } 

    async deleteTodo(titleTodo:string, statusReq:Boolean){

        /* parametros para la funcion de eliminar 
            1. query -> la estructura como tu vas a buscar tus datos dentro de la collecion
        */
        return await this.todoModel.findOneAndRemove({title:titleTodo,endState:statusReq})

    }

    async deleteForUrl(title:string){
        return await this.todoModel.findOneAndUpdate({title:title})

    }
}