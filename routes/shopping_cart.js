const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shopping_cart_controller');
const {
    authenticate,
    requireCustomer
} = require('../middlewares/auth_middleware');

router.post('/add-to-cart', authenticate, requireCustomer, shoppingCartController.addToCart);
router.get('/get-cart-items', authenticate, requireCustomer, shoppingCartController.getCartItems);
router.delete('/remove-from-cart/:product_id', authenticate, requireCustomer, shoppingCartController.removeFromCart);
router.delete('/remove-all-from-cart', authenticate, requireCustomer, shoppingCartController.removeAllFromCart);

console.log('Shopping cart running')

module.exports = router;