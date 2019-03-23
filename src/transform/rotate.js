const gm = require('gm').subClass({ imageMagick: true });

const rotate = (buf, { color = 'transparent', degrees }) =>
	new Promise((resolve, reject) => {
		gm(buf)
			.rotate(color, degrees)
			.toBuffer((error, buffer) => (error ? reject(error) : resolve(buffer)));
	});

module.exports = rotate;
