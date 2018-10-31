const gm = require('gm').subClass({ imageMagick: true });

const imageGet = (type, image) =>
	new Promise((resolve, reject) => {
		gm(image)[type]((error, value) => (error ? reject(error) : resolve(value)));
	});

module.exports = imageGet;
