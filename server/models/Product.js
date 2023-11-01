const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    buyingPrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
