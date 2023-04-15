const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.customerId = decoded.id;
    console.log("Customer ID", req.customerId)
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

function requireCustomer(req, res, next) {
  if (!req.customerId) {
    return res.status(401).json({ error: 'Customer ID missing' });
  }
  next();
}

module.exports = {
  authenticate,
  requireCustomer,
};
