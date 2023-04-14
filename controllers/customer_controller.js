const {
  registerCustomer,
  loginCustomer,
  logoutCustomer
} = require('../services/customer_service');

function register(req, res, next) {
  registerCustomer(req.body)
    .then((token) => res.json({
      token
    }))
    .catch((err) => next(err));
}

function login(req, res, next) {
  loginCustomer(req.body)
    .then((token) => res.json({
      token
    }))
    .catch((err) => next(err));
}

function logout(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }
  logoutCustomer(token);
  res.json({ message: 'Logout successful' });
}



module.exports = {
  register,
  login,
  logout,
};