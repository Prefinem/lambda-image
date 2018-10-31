const load = (loadInfo, options = {}) => {
	if (loadInfo instanceof Buffer) {
		return loadInfo;
	} else if (loadInfo.key && loadInfo.bucket) {
		return require('./s3')(loadInfo, options);
	} else if (typeof loadInfo === 'string') {
		if (loadInfo.indexOf('data:image') > -1 || loadInfo.indexOf('base64') > -1) {
			return Buffer.from(this.base64.replace(/^data:image\/\w+;base64,/u, ''), 'base64');
		} else if (loadInfo.indexOf('http') > -1) {
			return require('./url')(loadInfo);
		} else if (loadInfo.indexOf('/') > -1) {
			return require('fs').readFileSync(loadInfo);
		}
	}

	return undefined;
};

module.exports = load;
