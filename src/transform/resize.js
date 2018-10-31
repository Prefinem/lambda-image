const gm = require('gm').subClass({ imageMagick: true });

const resize = (buf, width, height) =>
	new Promise((resolve, reject) => {
		gm(buf)
			.resize(width || null, height || null)
			.toBuffer((error, buffer) => {
				if (error) {
					reject(error);
				} else {
					resolve(buffer);
				}
			});
	});

module.exports = resize;
