const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const connection = require('../mysql_connection/index');

function registerCustomer(customerData) {
    return new Promise((resolve, reject) => {
        const {
            customer_name,
            customer_email,
            customer_phone,
            customer_password
        } = customerData;
        const saltRounds = 10;
        bcrypt.hash(customer_password, saltRounds, (err, hash) => {
            if (err) {
                reject(err);
                return;
            }
            const customerId = uuid.v4();
            const insertQuery = 'INSERT INTO customers (customer_id, customer_name, customer_email, customer_phone, customer_password) VALUES (?, ?, ?, ?, ?)';
            connection.query(insertQuery, [customerId, customer_name, customer_email, customer_phone, hash], (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                const token = jwt.sign({
                    id: customerId
                }, process.env.JWT_SECRET);
                resolve(token);
            });
        });
    });
}

function loginCustomer(credentials) {
    return new Promise((resolve, reject) => {
        const {
            customer_email,
            customer_password
        } = credentials;
        const selectQuery = 'SELECT * FROM customers WHERE customer_email = ?';
        connection.query(selectQuery, [customer_email], (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            if (results.length === 0) {
                reject(new Error('Invalid email or password'));
                return;
            }
            const customer = results[0];
            bcrypt.compare(customer_password, customer.customer_password, (bcryptErr, bcryptResult) => {
                if (bcryptErr) {
                    reject(bcryptErr);
                    return;
                }
                if (!bcryptResult) {
                    reject(new Error('Invalid email or password'));
                    return;
                }
                const token = jwt.sign({
                    id: customer.customer_id
                }, process.env.JWT_SECRET);
                resolve(token);
            });
        });
    });
}

function logoutCustomer(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(new Error('Invalid token'));
                return;
            }
            // Perform any additional actions required for logging out a customer
            resolve();
        });
    });
}


module.exports = {
    registerCustomer,
    loginCustomer,
    logoutCustomer,
};