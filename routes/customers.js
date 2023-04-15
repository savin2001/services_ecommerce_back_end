const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/customer_controller');
const { authenticate } = require('../middlewares/auth_middleware');

// Customer registration
router.post('/register', register);

// Customer login
router.post('/login', login);

// Customer logout
router.post('/logout', authenticate, logout);
console.log('Customers running')

module.exports = router;

