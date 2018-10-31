const imageGet = require('./imageGet');
const getDimensions = (buf) => imageGet('size', buf);

module.exports = getDimensions;
