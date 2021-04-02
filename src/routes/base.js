import express from 'express'
import mockData from '../db/test.js'

const router = express.Router();

router.get('/', (request, response) => response.json(mockData))

router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const found = mockData.some(todo => todo.id === id);

    if (found) {
        response.json(
            mockData.filter(todo => todo.id === id)
        )
    } else {
        response.status(400).json({ error: `No todo with the id of ${id}` })
    }
})

export { router }
