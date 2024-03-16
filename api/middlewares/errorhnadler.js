const logger = require('../../api/v1/service/logger.service');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
};