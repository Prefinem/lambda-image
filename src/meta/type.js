const imageGet = require('./imageGet');
const getType = async (buf) => (await imageGet('format', buf)).toLowerCase();

module.exports = getType;
