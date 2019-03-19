const gm = require('gm').subClass({ imageMagick: true });
const getDimensions = require('./../meta/dimensions');

const resizeAndCropCenter = async (buf, { height, width }) => {
	const { height: originalHeight, width: originalWidth } = await getDimensions(buf);
	const originalRatio = originalWidth / originalHeight;
	const newRatio = width / height;
	const heightDelta = originalRatio * originalHeight - newRatio * height;
	const widthDelta = originalRatio * originalWidth - newRatio * width;
	const resizeHeight = heightDelta <= widthDelta ? height : null;
	const resizeWidth = heightDelta >= widthDelta ? width : null;

	const newBuf = await new Promise((resolve, reject) => {
		gm(buf)
			.resize(resizeWidth, resizeHeight)
			.gravity('Center')
			.crop(width, height)
			.toBuffer((error, buffer) => (error ? reject(error) : resolve(buffer)));
	});

	return newBuf;
};

module.exports = resizeAndCropCenter;
