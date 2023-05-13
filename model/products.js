const mongoose = require('mongoose')
const {Schema, model}= mongoose

const productsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        required:true
    },
    image:{
        type: String
    }
},{
    versionKey: false,
    timestamps: true
})
const ProductsModel = model('products', productsSchema)

module.exports = ProductsModel