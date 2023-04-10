const express = require('express');
const router = express.Router();
const {
    getAllWebDesignController,
    getWebDesignServiceByIdController,
    postWebDesignServiceController,
    updateWebDesignServiceController,
    deleteWebDesignServiceController
} = require('../controllers/web_design_controller');

function initRouter(connection) {
    
    router.get('/web-design', getAllWebDesignController(connection));
    router.get('/web-design/:id', getWebDesignServiceByIdController(connection));
    router.post('/web-design/post', postWebDesignServiceController(connection));
    router.put('/web-design/update/:id', updateWebDesignServiceController(connection));
    router.delete('/web-design/delete/:id', deleteWebDesignServiceController(connection));

    return router;
}

module.exports = initRouter;