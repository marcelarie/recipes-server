import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { app } from './server.js'
dotenv.config()

const PORT = process.env.PORT || 5001

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected')
)

app.listen(PORT, () => console.log(`Server Running on port ${PORT} :)`));
