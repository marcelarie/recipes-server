import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import recipesRouter from './routes/recipes.js'
import usersRouter from './routes/users.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/recipes', recipesRouter);
app.use('/user', usersRouter);

export { app }
