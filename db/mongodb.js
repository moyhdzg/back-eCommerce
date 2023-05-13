const mongoose = require('mongoose')
require('dotenv').config();

const url = `mongodb+srv://${process.env.USER_MONGO}:${process.env.USER_MONGO_PASS}@cluster0.${process.env.MONGO_ID_PASS}.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(url)
.then(()=>{
    console.log('-----------------------')
    console.log('Base de datos conectada')
    console.log('-----------------------')
})
.catch(()=>{console.error(error);})
