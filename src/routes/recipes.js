import express from 'express'

const recipesRouter = express.Router();

recipesRouter.get(
    '/',
    (request, response) => {
        response.send()
    })


export default recipesRouter
