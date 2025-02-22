const express = require('express')
const route = express.Router()
const authenticate = require('../../../middlewares/authMiddleware')

//task
const task_controller = require('./task/task_controller')
const task_validation = require('./task/task_validation')
route.get('/tasks', authenticate.authenticate, task_controller.getTasks); // Get all tasks with pagination
route.get('/tasks/:id', authenticate.authenticate, task_controller.getTaskById); // Get a specific task
route.post('/tasks', authenticate.authenticate, task_validation.create_task, task_controller.createTask);  // Create a new task  
route.patch('/tasks/:id', authenticate.authenticate, task_validation.update_task, task_controller.updateTask); // Update a task
route.delete('/tasks/:id',authenticate.authenticate, task_controller.deleteTask); // Soft delete a task

//user
const user_controller = require('./user/user_constrolle')
const user_validation = require('./user/user_validation')
route.post('/auth/registration', user_validation.registration, user_controller.registration)
route.post('/auth/login', user_validation.login, user_controller.auth)

module.exports = route