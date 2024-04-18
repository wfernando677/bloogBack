import "dotenv/config"
import express from 'express'
import cors from 'cors'
import {router} from './routes'
import db from './config/mongo'

const PORT = process.env.PORT || 30001
const app= express()
app.use(cors())
app.use(express.json())// para que reciba formato json
app.use(router) //llamdo a las rutas 
db().then( () => console.log('base de datos conectada'));//llamado a la config de la conexion a la base de datos
app.listen(PORT, () => {console.log(`servidor puerto ${PORT}`); 
})