const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {ProductsController} = require('../controllers')
const { 
    getProducts, 
    getProductsById, 
    createProducts, 
    updateProducts, 
    deleteProducts 
} = ProductsController

router.get('/', async(req,res)=>{
    const products = await getProducts();
    res.send(products)
})

router.get('/:id', async(req,res)=>{
    const products = await getProdructsById(req.params.id)
    res.send(products)
})

router.post('/',async(req,res)=>{
    const body = req.body
    try {
        const newProduct = await createProducts(body)
        res.send(newProduct)
    }catch(error){
        console.error(error)
        res.send({message:error.message})
    }
})

router.put('/:id',async(req,res)=>{
    const body = req.body
    const {id} = req.params
    const product = await updateProducts(id, body)
    if(!product){
        return res.send({
            message: "Producto no encontrado / Product not found"
        })
    }
    res.send(product)
})


router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    const result = await deleteProducts(id);
    res.send(result)
})

module.exports = router