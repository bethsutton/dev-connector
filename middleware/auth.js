const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware for protected routes
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    // Decode jwt token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Set req.user to user in decoded token
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not found' });
  }
};
