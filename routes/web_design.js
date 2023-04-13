const express = require('express');
const router = express.Router();
const {
    getAllWebDesignController,
    getWebDesignServiceByIdController,
    postWebDesignServiceController,
    updateWebDesignServiceController,
    deleteWebDesignServiceController
} = require('../controllers/web_design_controller');

function webDesignRouter(connection) {
    
    router.get('/', getAllWebDesignController(connection));
    router.get('/:id', getWebDesignServiceByIdController(connection));
    router.post('/post', postWebDesignServiceController(connection));
    router.put('/update/:id', updateWebDesignServiceController(connection));
    router.delete('/delete/:id', deleteWebDesignServiceController(connection));

    console.log('Web design running')
    return router;
}

module.exports = webDesignRouter;