import express from 'express'
import morgan from 'morgan'
import { router } from './routes/base.js'

const app = express();

app.use(morgan('dev'));


app.use('/', router);

export { app }
