const gm = require('gm').subClass({ imageMagick: true });

const quality = (buf, percentage) =>
	new Promise((resolve, reject) => {
		gm(buf)
			.quality(percentage)
			.toBuffer((error, buffer) => {
				if (error) {
					reject(error);
				} else {
					resolve(buffer);
				}
			});
	});

module.exports = quality;
