import express from 'express'

import {
    singUp,
    login,
    getAllUsers
} from '../controllers/users-controller.js'

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers)
usersRouter.post('/register', singUp)
usersRouter.get('/login', login)

export default usersRouter
