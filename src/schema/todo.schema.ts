import {Schema} from 'mongoose' 
export const todoSchema = new Schema({
    title:String,
    descr:String,
    endState:{type:Boolean,default:false},
    dateInit:{type:Date,default: new Date()},
    dateEnd:Date     
})
