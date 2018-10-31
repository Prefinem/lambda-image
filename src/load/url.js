const download = async (url) => {
	const got = require('got');
	const { body } = await got(url, { encoding: null, headers: { 'User-Agent': 'lambda-image' } });

	return body;
};

module.exports = download;
