const getDimensions = require('./dimensions');

const getWidth = async (buf) => (await getDimensions(buf)).width;

module.exports = getWidth;
