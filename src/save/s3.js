const getContentType = require('./../meta/contentType');

const getS3 = (profile) => {
	const AWS = require('aws-sdk');

	if (profile) {
		const credentials = new AWS.SharedIniFileCredentials({ profile });

		AWS.config.update({ region: 'us-east-1' });
		AWS.config.credentials = credentials;
	}

	return new AWS.S3({ apiVersion: '2006-03-01' });
};

const s3Save = async (buf, { bucket, key }, { profile }) => {
	const s3 = getS3(profile);
	const contentType = await getContentType(buf);
	const params = {
		ACL: 'public-read',
		Body: buf,
		Bucket: bucket,
		ContentEncoding: 'base64',
		ContentType: contentType,
		Key: key,
	};

	return s3.putObject(params).promise();
};

module.exports = s3Save;
