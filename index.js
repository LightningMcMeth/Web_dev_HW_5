const express = require('express');
const bodyParser = require('body-parser');
const PORT = require('./configs/port');
const mongoose = require('./mongooseConnection');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', 'views');

//http://localhost:3500/products/info FOR INFOMATION
app.use('/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 