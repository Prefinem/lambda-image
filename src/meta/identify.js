const imageGet = require('./imageGet');

const identify = (buf) => imageGet('identify', buf);

module.exports = identify;
