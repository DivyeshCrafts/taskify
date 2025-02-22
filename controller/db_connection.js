const mongoose = require('mongoose')
mongoose.set('debug', true)

module.exports.db_connect = async function(){
    try {
        return mongoose.connect('mongodb://127.0.0.1:27017/taskify')
    } catch (error) {
        console.log("mongodb error", error)
    }
}