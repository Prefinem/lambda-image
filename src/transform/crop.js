const gm = require('gm').subClass({ imageMagick: true });

const crop = (buf, { gravity = 'Center', height, width }) =>
	new Promise((resolve, reject) => {
		gm(buf)
			.gravity(gravity)
			.crop(width, height)
			.toBuffer((error, buffer) => (error ? reject(error) : resolve(buffer)));
	});

module.exports = crop;
