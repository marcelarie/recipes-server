import express from 'express'

import {
    singUp,
    login
} from '../controllers/users-controller.js'

const usersRouter = express.Router();

usersRouter.post('/register', singUp)
usersRouter.get('/login', login)

export default usersRouter
