import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './router'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'

dotenv.config()
connectDB()

const app = express()

app.use(cors(corsConfig))

app.use(express.json())

app.use('/', router)

export default app
