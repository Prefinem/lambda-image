const getS3 = (profile) => {
	const AWS = require('aws-sdk');

	if (profile) {
		const credentials = new AWS.SharedIniFileCredentials({ profile });

		AWS.config.update({ region: 'us-east-1' });
		AWS.config.credentials = credentials;
	}

	return new AWS.S3({ apiVersion: '2006-03-01' });
};

const s3Load = async ({ bucket, key }, { profile }) => {
	const s3 = getS3(profile);
	const { Body } = await s3.getObject({ Bucket: bucket, Key: key }).promise();

	return Body;
};

module.exports = s3Load;
