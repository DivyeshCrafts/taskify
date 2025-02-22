API with Authentication and CRUD Operations

Project Overview

This project is a javaScript with express API that provides authentication and CRUD operations for managing tasks. The API includes:

1. User authentication (login and registration)
2. Task management with CRUD operations (GET /tasks, GET /tasks/:id, POST /tasks, PATCH /tasks/:id, DELETE /tasks/:id)
3. Authentication middleware to protect task endpoints
4. Request data validation

API Endpoints

Authentication:

POST "/auth/registration" Register a new user
POST "/auth/login" Login and get token

Tasks (Protected with authentication middleware)

GET "/tasks" Get all tasks with pagination
GET "/tasks/:id" Get a task by ID
POST "/tasks" Create a new task
PATCH "/tasks/:id" Update a task with validation
DELETE "/tasks/:id" Soft delete a task

Authentication Middleware: The authentication middleware ensures only authenticated users can access task routes.

file structure - middlewares/authMiddleware


Installation & Setup:

1. Clone the repository
git clone https://github.com/your-repo.git
cd your-repo

2. Install dependencies
npm install

4. Start the server
npm start