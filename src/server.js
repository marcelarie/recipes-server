import express from 'express'
import morgan from 'morgan'
import recipesRouter from './routes/recipes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/recipes', recipesRouter);

export { app }
