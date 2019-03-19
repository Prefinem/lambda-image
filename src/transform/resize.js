const gm = require('gm').subClass({ imageMagick: true });

const resize = (buf, { height, width }) =>
	new Promise((resolve, reject) => {
		gm(buf)
			.resize(width || null, height || null)
			.toBuffer((error, buffer) => (error ? reject(error) : resolve(buffer)));
	});

module.exports = resize;
