const crypto = require('crypto');

const getHash = (buf, algorithm = 'md5') =>
	crypto
		.createHash(algorithm)
		.update(buf)
		.digest('hex')
		.toUpperCase();

module.exports = getHash;
