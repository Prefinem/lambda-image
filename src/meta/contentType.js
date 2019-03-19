const getType = require('./type');

const getContentType = async (buf) => `image/${await getType(buf)}`;

module.exports = getContentType;
