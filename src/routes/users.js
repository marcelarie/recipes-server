import express from 'express'

const usersRouter = express.Router();

usersRouter.get(
    '/login',
    (request, response) => {
        response.send()
    })
