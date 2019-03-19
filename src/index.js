const getContentType = require('./meta/contentType');
const getDimensions = require('./meta/dimensions');
const getHash = require('./meta/hash');
const getHashKey = require('./meta/hashKey');
const getHeight = require('./meta/height');
const getSize = require('./meta/size');
const getType = require('./meta/type');
const getWidth = require('./meta/width');

const identify = require('./meta/identify');

const load = require('./load');
const save = require('./save');

const crop = require('./transform/crop');
const quality = require('./transform/quality');
const resize = require('./transform/resize');
const resizeAndCropCenter = require('./transform/resizeAndCropCenter');

const toBase64 = require('./convert/base64');
const toBase64Binary = require('./convert/base64Binary');

const image = async (loadInfo, loadOptions = {}) => {
	const buf = await load(loadInfo, loadOptions);

	if (!(buf instanceof Buffer)) {
		throw new Error('Not a valid image');
	}

	return {
		crop: (width, height, gravity) => crop(buf, { gravity, height, width }),
		getContentType: () => getContentType(buf),
		getDimensions: () => getDimensions(buf),
		getExt: () => getType(buf),
		getHash: () => getHash(buf),
		getHashKey: () => getHashKey(buf),
		getHeight: () => getHeight(buf),
		getSize: () => getSize(buf),
		getType: () => getType(buf),
		getWidth: () => getWidth(buf),
		identify: () => identify(buf),
		quality: (percentage) => quality(buf, { percentage }),
		resize: (width, height) => resize(buf, { height, width }),
		resizeAndCropCenter: (width, height) => resizeAndCropCenter(buf, { height, width }),
		save: (saveInfo, saveOptions = loadOptions) => save(buf, saveInfo, saveOptions),
		toBase64: () => toBase64(buf),
		toBase64Binary: () => toBase64Binary(buf),
		toBuf: () => buf,
	};
};

module.exports = image;
