const jwt = require('jsonwebtoken');

async function authmiddle  (req, res, next) {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports={authmiddle}