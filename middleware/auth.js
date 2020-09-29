const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get the token from header
  const token = req.header('x-auth-token');

  // If token is not present
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token present..Authorization denied!' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtToken'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid!!' });
  }
};
