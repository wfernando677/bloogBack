import "dotenv/config"
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import db from './config/mongo'

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors({ origin: '*' })); // Permitir todas las solicitudes de origen
app.use(express.json())
app.use(router) 
db().then(() => console.log('db connected'));
app.listen(PORT, () => { console.log(`server on port ${PORT}`); })