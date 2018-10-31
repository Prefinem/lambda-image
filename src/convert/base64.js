const type = require('./../meta/type');
const base64Binary = require('./base64Binary');
const base64 = async (buf) => `data:image/${await type(buf)};base64,${base64Binary(buf)}`;

module.exports = base64;
