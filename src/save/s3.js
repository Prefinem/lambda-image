const getContentType = require('./../meta/contentType');
const getS3 = require('./../lib/s3');

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
