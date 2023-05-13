const ProductsModel = require('../model/products')


const getProducts = async() =>{
    const products = await ProductsModel.find({})
    return products
}

const getProductsById = async(_id) => {
    return ProductsModel.findById(_id);
}

const createProducts = async(product) =>{
    const newProduct = new ProductsModel(product);
    return newProduct.save()
}

const updateProducts = async(_id, product) =>{
    return ProductsModel.findByIdAndUpdate({_id}, product,{
        upsert:false,
        new:true
    })
}

const deleteProducts = async(_id,product) =>{
    return ProductsModel.findByIdAndRemove(_id)
}

module.exports = {
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts 
}

