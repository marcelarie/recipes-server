import express from 'express'
import morgan from 'morgan'
import { router } from './routes/base.js'
import { recipesRouter } from './routes/recipes.js'

const app = express();

app.use(morgan('dev'));

app.use('/', router);
app.use('/recipes', recipesRouter);

export { app }
