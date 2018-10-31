const save = (buf, saveInfo, options = {}) => {
	if (saveInfo.bucket && saveInfo.key) {
		return require('./s3')(buf, saveInfo, options);
	} else if (typeof saveInfo === 'string') {
		return require('fs').writeFileSync(saveInfo, buf);
	}

	throw new Error('Unknown save info type.  Either provide a key and bucket or file path');
};

module.exports = save;
