import { Controller,Get,Param, Post, Put, Delete, Req, Res } from '@nestjs/common';
import { Request} from "express";
import {TodoService} from "./todo.service";


@Controller('todo')
export class TodoController {
    

    constructor(private todoService:TodoService){}



    @Get('/task/:id')
    getTodo(@Param('id') idTask){
        return this.todoService.FindTodoID(idTask)
    }

    @Get('')
    getTodos(){
        return this.todoService.allFindTodo()
    }

    /*@Get('')
    getMoreTodo(){
        return this.todoService.allFindTodo()
    }*/

    @Delete('/task')
    deleteTodo(@Req() req:Request){
        // Capturamos los datos que necesito para mi api , desde la peticion
        let title = req.body.title
        let status = req.body.status
        //Llamamos a nuestra parte logica que se comunica con la DB para eliminar la tarea
        this.todoService.deleteTodo()
    }

    @Delete('/taskdelete/:titleTask')
    deleteForUrl(@Req() req:Request, @Param('titleTask') titleTask){
        let title = titleTask
        let status = req.body.endState
        return this.todoService.deleteForUrl(title).then((result)=>{
            if (result) {return{"mensaje":" borro tarea",code:true}}
            else {
                return{"mensaje":"no borro tarea",code:false}
        }) catch((error)=>{})
    }
    }

    @Post('')
    newTodo(@Req() req:Request){
        let title : string = req.body.title
        let descr : string = req.body.descr
        console.log("Req", req.body)
        this.todoService.newTodo({title:title,descr:descr})
    

        return {message:"OK"}
    }

    /*@Put('/:id')
    updateTodo(@Req() req:Request,@Param('id') idtask:string){
        let flagsear = false ;
        let dataUpdate = req.body.data;
        console.log('id:',idtask);
        
       
        if(dataUpdate){
            this.todos.forEach((element,index)=>{
                if(idtask === element.title){
                    console.log('true');
                    element['descr'] = dataUpdate.descr
                    flagsear = true
                }

            })

            if(flagsear){
                return {"messages":"datos actualizados"}

            }else{
                return {"messages":"no se encontro el elemento"}
            }
        }else{
            return {"messages":"no hay datos ingresados"}
        }

    }*/

    /*@Delete('/:id')
    deleteTodo(@Req() req:Request,@Param('id') idtask){
        let flagsear : boolean = false ;
        let indexdelete : number

        if(idtask){
            this.todos.forEach((element,index)=>{
                if(idtask === element.title){
                    indexdelete = index
                    flagsear = true
                }

            })

            if(flagsear){
                this.todos.splice(indexdelete,1)
                return {"messages":"tarea eliminada"}

            }else{
                return {"messages":"no se encontro el elemento"}
            }
        }else{
            return {"messages":"no hay datos ingresados"}
        }

    }*/

    @Put('/task/:titleTask')

    updateForTitle(@Req() req:Request,@Param('titleTask') titletask){
        let title = titletask
        let descr = req.body.descr
        this.todoService.updateTodo(title,descr)
    }
    



}