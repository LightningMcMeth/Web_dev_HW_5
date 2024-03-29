const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name: String,
    price: Number,
    category: String,
    attributes: String

})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;