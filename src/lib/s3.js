const s3 = (profile) => {
	const AWS = require('aws-sdk');

	if (profile) {
		const credentials = new AWS.SharedIniFileCredentials({ profile });

		AWS.config.update({ region: 'us-east-1' });
		AWS.config.credentials = credentials;
	}

	return new AWS.S3({ apiVersion: '2006-03-01' });
};

module.exports = s3;
