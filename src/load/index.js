const stringLoad = (loadInfo) => {
	if (loadInfo.indexOf('data:image') > -1 || loadInfo.indexOf('base64') > -1) {
		return Buffer.from(loadInfo.replace(/^data:image\/\w+;base64,/u, ''), 'base64');
	} else if (loadInfo.indexOf('http') > -1) {
		return require('./url')(loadInfo);
	}
	return require('fs').readFileSync(loadInfo);
};

const load = (loadInfo, options) => {
	if (loadInfo instanceof Buffer) {
		return loadInfo;
	} else if (loadInfo && loadInfo.key && loadInfo.bucket) {
		return require('./s3')(loadInfo, options);
	} else if (typeof loadInfo === 'string') {
		return stringLoad(loadInfo);
	}

	return undefined;
};

module.exports = load;
