import express from 'express'
import checkToken from '../middlewares/check-token.js'

import {
    singUp,
    login,
    getAllUsers
} from '../controllers/users-controller.js'

const usersRouter = express.Router();

usersRouter.get('/', checkToken, getAllUsers)
usersRouter.post('/register', singUp)
usersRouter.post('/login', login)

export default usersRouter
