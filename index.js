const express =require('express')
const app = express()
const cors = require ('cors')

const mongoose = require('mongoose');
require('dotenv').config()
require('./db/mongodb')
const apiRoutes = require('./apis')


app.use(cors());

app.use(express.json())
app.use('/apis/v1', apiRoutes)

app.get('/', (req,res)=>{
   res.send('servidor vivo') 
})

const PORT=process.env.PORT || 1234
app.listen(PORT,()=>{
    console.log(`Servidor vivo en puerto ${PORT}`)
})
