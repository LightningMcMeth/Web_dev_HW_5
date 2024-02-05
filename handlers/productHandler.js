const Product = require('../models/product');

function createProduct(name, price, category, attributes) {

    const product = new Product({
        name: name,
        price: price,
        category: category,
        attributes: attributes
    });

    return product.save();
}

module.exports = {
    createProduct
}