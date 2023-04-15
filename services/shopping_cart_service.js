const connection = require('../mysql_connection/index');

function addToCartService(customerId, productId, quantity) {
    return new Promise((resolve, reject) => {
        const selectQuery = 'SELECT * FROM shopping_cart WHERE customer_id = ? AND product_id = ?';
        connection.query(selectQuery, [customerId, productId], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            if (results.length === 0) {
                // Product not in cart yet, insert a new entry
                const insertQuery = 'INSERT INTO shopping_cart (customer_id, product_id, quantity) VALUES (?, ?, ?)';
                connection.query(insertQuery, [customerId, productId, quantity], (error) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve();
                });
            } else {
                // Product already in cart, update the quantity
                const updateQuery = 'UPDATE shopping_cart SET quantity = quantity + ? WHERE customer_id = ? AND product_id = ?';
                connection.query(updateQuery, [quantity, customerId, productId], (error) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve();
                });
            }
        });
    });
}







function getCartItemsService(customerId) {
    return new Promise((resolve, reject) => {
        const selectQuery = 'SELECT products.product_id, products.name, products.price, shopping_cart.quantity FROM shopping_cart JOIN products ON shopping_cart.product_id = products.product_id WHERE shopping_cart.customer_id = ?';
        connection.query(selectQuery, [customerId], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function removeFromCartService(customerId, productId) {
    return new Promise((resolve, reject) => {
        const deleteQuery = 'DELETE FROM shopping_cart WHERE customer_id = ? AND product_id = ?';
        connection.query(deleteQuery, [customerId, productId], (error) => {
            if (error) {
                reject(error);
                return;
            }
            resolve();
        });
    });
}

function removeAllFromCartService(customerId) {
    return new Promise((resolve, reject) => {
      const deleteQuery = 'DELETE FROM shopping_cart WHERE customer_id = ?';
      connection.query(deleteQuery, [customerId], (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
  

module.exports = {
    addToCartService,
    getCartItemsService,
    removeFromCartService,
    removeAllFromCartService    
};