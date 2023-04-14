const connection = require('../mysql_connection/index');
const webDesignRouter = require('./web_design')(connection);
const orderRouter = require('./orders')(connection);
const customersRouter = require('./customers');
const express = require('express');
const router = express.Router();

console.log('Routes running')
router.use('/web-design', webDesignRouter);
router.use('/orders', orderRouter);
router.use('/customers', customersRouter);

module.exports = router;
