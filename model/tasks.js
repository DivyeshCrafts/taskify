const mongoose = require('mongoose')


const tasks_schema = new mongoose.Schema({
    title:{type:String, default:""},
    description:{type:String, default:""},
    status: {type:String, default:""},
    completed_at:{type:Number, default:0}
})

module.exports = tasks_schema