const Product = require('../models/product');
const createProduct = require('../handlers/productHandler');
//const { response } = require('express');

async function listAllProductsController(req, res) {
    try {
        const products = await Product.find({});
        res.render('products', { products });

    } catch (error) {

        res.status(500).send(error);
    }
};

async function getProductByIdController(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        
        if(product == null){
            return res.status(404).send('Product not found :(');
        }
        res.render('products', { product });

    } catch (error) {

        res.status(500).send(error);
    }   
}

async function createNewProductController(req, res) {
    try{
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;
        const attributes = req.body.attributes;
        
        
        const newProduct = new Product({
            name: name,
            price: price,
            category: category,
            attributes: attributes
        });
        
        await newProduct.save();

        //I tried doing everything I could think of to get this function to work,
        //but it always returns an empty object. Only by carrying over the functionality here
        //was I able to get product creation working.
        
        //await createProduct(name, price, category, attributes);
        res.redirect('/products');

    } catch(error) {

        res.status(500).send(error);
    }

}

async function displayProductFormController(req, res) {
    res.render('create_product');
}

module.exports = {
    listAllProductsController,
    getProductByIdController,
    displayProductFormController,
    createNewProductController
}