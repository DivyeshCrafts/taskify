const common = require('../../../../controller/common')
const db_connection = require('../../../../controller/db_connection')
const tasks_schema = require('../../../../model/tasks')

const mongoose = require("mongoose");

//add task
module.exports.createTask = async function(req, res){

        try {
            let request_body = req.body
            let bdconnect = await db_connection.db_connect()
            let task_connection = bdconnect.model('tasks', tasks_schema)

                //add code
                request_body.create_at = Math.floor(new Date().getTime()/1000.0);
                request_body.update_at = Math.floor(new Date().getTime()/1000.0);
    
                let create_task = new task_connection(request_body)
                let save_task = await create_task.save()
    
                if(save_task){
                    res.send({message:"Create task successfull.", status: true, data: save_task})
                }else{
                    res.send({message:"Task not created.", status: false})
                }

        } catch (error) {
            console.log("error", error)
            res.send({message: "Something went wrong, please try again."})
        }
}

//get all task
module.exports.getTasks = async function(req, res){
    try {
        let bdconnect = await db_connection.db_connect()
        let task_connection = bdconnect.model('tasks', tasks_schema)

        let get_data = await task_connection.find()
        if(get_data.length != 0){
            res.send({message:"Task list", status:true, data:get_data})
        }else{
            res.send({message:"Not found task list", status:false,})
        }
    } catch (error) {
        console.log("error", error)
        res.send({message: "Something went wrong, please try again."})
    }
}

//get by id task
module.exports.getTaskById = async function(req, res){
    try {
        let bdconnect = await db_connection.db_connect()
        let task_connection = bdconnect.model('tasks', tasks_schema)
        let id = req.params.id
          
        let get_data = await task_connection.findById(id)
      
        if(get_data != null){
            res.send({message:"Task list", status:true, data:get_data})
        }else{
            res.send({message:"Task not found", status:false,})
        }
    } catch (error) {
        console.log("error", error)
        res.send({message: "Something went wrong, please try again."})
    }
}

//update task
module.exports.updateTask = async function(req, res){

        try {
            let request_body = req.body
            let bdconnect = await db_connection.db_connect()
            let task_connection = bdconnect.model('tasks', tasks_schema)

            if(req.params.id){               
                let update_task = await task_connection.updateOne({_id:req.params.id}, {$set: request_body})
                if(update_task){
                    res.send({message:"Task updated.", status: true})
                }else{
                    res.send({message:"Task not updated.", status: false})
                }
            }else{
            res.send({message: "Id not found"})
            }
           

        } catch (error) {
            console.log("error", error)
            res.send({message: "Something went wrong, please try again."})
        }
}

//delete task
module.exports.deleteTask = async function (req, res) {

        try{
            let request_body = req.body
            let bdconnect = await db_connection.db_connect()
            let task_connection = bdconnect.model('tasks', tasks_schema)

            let task_delete = await task_connection.updateOne({_id:req.params.id}, {$set: request_body})
            
            if(task_delete.deletedCount != 0){
                res.send({message:"Task delete successfull."})
            }else{
                res.send({message:"Task not delete."})
            }

        }catch(error){
            console.log("error", error)
            res.send({message: "Something went wrong, please try again."})
        }
    
}
