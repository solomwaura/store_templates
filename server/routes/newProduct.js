// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

// Define a route for uploading a new product
router.post('/upload-product', (req, res) => {
    const { productName, quantity, buyingPrice, sellingPrice } = req.body;

    // Create a new product document and save it to the database
    const newProduct = new Product({
        productName,
        quantity,
        buyingPrice,
        sellingPrice
    });

    newProduct.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Product added successfully');
        }
    });
});

module.exports = router;
