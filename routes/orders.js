const express = require('express');
const router = express.Router();
const {
    getAllOrderController,
    getOrderServiceByIdController,
    postOrderServiceController,
    updateOrderServiceController,
    deleteOrderServiceController
} = require('../controllers/order_controller');

function ordersRouter(connection) {

    router.get('/', getAllOrderController(connection));
    router.get('/:id', getOrderServiceByIdController(connection));
    router.post('/post', postOrderServiceController(connection));
    router.put('/update/:id', updateOrderServiceController(connection));
    router.delete('/delete/:id', deleteOrderServiceController(connection));
    console.log('Orders running')
    return router;
}

module.exports = ordersRouter;