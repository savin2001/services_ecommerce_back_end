const express = require('express');
const router = express.Router();
const { register_customer, login_customer, logout_customer } = require('../controllers/customer_controller');

router.post('/register', register_customer);
router.post('/login', login_customer);
router.post('/logout', logout_customer);

module.exports = router;
