const connection = require('../mysql_connection/index');
const webDesignRouter = require('./products')(connection);
const orderRouter = require('./orders')(connection);
const customersRouter = require('./customers');
const shoppingCartRouter = require('./shopping_cart');
const express = require('express');
const router = express.Router();

console.log('Routes running')
router.use('/products', webDesignRouter);
router.use('/orders', orderRouter);
router.use('/customers', customersRouter);
router.use('/shopping-cart', shoppingCartRouter);


module.exports = router;
