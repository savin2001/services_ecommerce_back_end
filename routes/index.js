// const connection = require('../mysql_connection/index');
// const ordersRouter = require('./orders')(connection);
// // const ordersRouter = require('./web_design')(connection);


// module.exports = ordersRouter;

const connection = require('../mysql_connection/index');
const webDesignRouter = require('./web_design')(connection);
const orderRouter = require('./orders')(connection);
const express = require('express');
const router = express.Router();

console.log('Routes running')
router.use('/web-design', webDesignRouter);
router.use('/orders', orderRouter);

module.exports = router;
