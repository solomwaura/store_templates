const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3080;

// Connect to your MongoDB database
const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected...')
})
.catch(err => console.log(err));

// Parse the request body
app.use(bodyParser.urlencoded({ extended: true }));


// route for handling product upload
const uploadProduct = require('./routes/newProduct');
app.use('/uploadProduct', uploadProduct);

app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});
