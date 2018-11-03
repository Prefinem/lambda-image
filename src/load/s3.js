const getS3 = require('./../lib/s3');

const s3Load = async ({ bucket, key }, { profile }) => {
	const s3 = getS3(profile);
	const { Body } = await s3.getObject({ Bucket: bucket, Key: key }).promise();

	return Body;
};

module.exports = s3Load;
