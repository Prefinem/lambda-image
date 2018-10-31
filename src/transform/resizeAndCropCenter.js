const gm = require('gm').subClass({ imageMagick: true });
const getDimensions = require('./../meta/dimensions');

const resizeAndCropCenter = async (buf, width, height) => {
	const { height: originalHeight, width: originalWidth } = await getDimensions(buf);
	const originalRatio = originalWidth / originalHeight;
	const newRatio = width / height;
	const heightOrWidth =
		Math.abs(originalRatio * originalHeight - newRatio * height) <
		Math.abs(originalRatio * originalWidth - newRatio * width)
			? 'height'
			: 'width';
	const resizeHeight = heightOrWidth === 'height' ? height : null;
	const resizeWidth = heightOrWidth === 'width' ? width : null;

	const newBuf = await new Promise((resolve, reject) => {
		gm(buf)
			.resize(resizeWidth, resizeHeight)
			.gravity('Center')
			.crop(width, height)
			.toBuffer((error, buffer) => {
				if (error) {
					reject(error);
				} else {
					resolve(buffer);
				}
			});
	});

	return newBuf;
};

module.exports = resizeAndCropCenter;
