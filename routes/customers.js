const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/customer_controller');

// Customer registration
router.post('/register', register);

// Customer login
router.post('/login', login);

// Customer logout
router.post('/logout', logout);
console.log('Customers running')

module.exports = router;

