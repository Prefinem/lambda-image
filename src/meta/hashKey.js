const getHash = require('./hash');
const getType = require('./type');

const getHashKey = async (buf) => {
	const hash = await getHash(buf);
	const ext = await getType(buf);

	return `${hash.substr(0, 1)}/${hash.substr(1, 1)}/${hash}.${ext}`;
};

module.exports = getHashKey;
