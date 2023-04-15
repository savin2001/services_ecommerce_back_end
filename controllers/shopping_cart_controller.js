const {
    addToCartService,
    getCartItemsService,
    removeFromCartService,
    removeAllFromCartService,
} = require('../services/shopping_cart_service');

async function addToCart(req, res, next) {
    const customerId = req.customerId;
    const productId = req.body.product_id;
    const quantity = req.body.quantity;
    addToCartService(customerId, productId, quantity)
        .then(() => res.json({
            message: 'Product added to cart'
        }))
        .catch((err) => next(err));
}



function getCartItems(req, res, next) {
    const customerId = req.customerId;
    getCartItemsService(customerId)
        .then((items) => res.json(items))
        .catch((err) => next(err));
}

function removeFromCart(req, res, next) {
    const customerId = req.customerId;
    const productId = req.params.product_id;
    removeFromCartService(customerId, productId)
        .then(() => res.json({
            message: 'Product removed from cart'
        }))
        .catch((err) => next(err));
}

function removeAllFromCart(req, res, next) {
    const customerId = req.customerId;
    removeAllFromCartService(customerId)
      .then(() => res.json({ message: 'All items removed from cart' }))
      .catch((err) => next(err));
  }
  

module.exports = {
    addToCart,
    getCartItems,
    removeFromCart,
    removeAllFromCart
};