const getDimensions = require('./dimensions');
const getHeight = async (buf) => (await getDimensions(buf)).height;

module.exports = getHeight;
