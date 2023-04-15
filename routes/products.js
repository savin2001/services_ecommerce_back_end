const express = require('express');
const router = express.Router();
const {
    getAllProductController,
    getProductServiceByIdController,
    postProductServiceController,
    updateProductServiceController,
    deleteProductServiceController
} = require('../controllers/product_controller');

function ProductRouter(connection) {

    router.get('/', getAllProductController(connection));
    router.get('/:product_id', getProductServiceByIdController(connection));
    router.post('/post', postProductServiceController(connection));
    router.put('/update/:product_id', updateProductServiceController(connection));
    router.delete('/delete/:product_id', deleteProductServiceController(connection));

    console.log('product running')
    return router;
}

module.exports = ProductRouter;