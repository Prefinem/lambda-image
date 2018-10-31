const gm = require('gm');

const imageGet = (type, image) =>
	new Promise((resolve, reject) => {
		gm(image)[type]((error, value) => (error ? reject(error) : resolve(value)));
	});

module.exports = imageGet;
