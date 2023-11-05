// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

// Define a route for uploading a new product
router.post('/uploadProduct', async (req, res) => {
    try{
        const { name, quantity, buying, selling } = req.body;

        console.log("The values are : ", req.body)
    
        // Create a new product document and save it to the database
        const newProduct = new Product({
            name,
            quantity,
            buying,
            selling
        });
    
        await newProduct.save()
        res.status(201).json(newProduct);
        console.log('Product added successfully');

    } catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
