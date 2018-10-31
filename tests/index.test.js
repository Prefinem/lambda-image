const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const image = require('./../src/index');

const getMeta = async (imageObject) => ({
	contentType: await imageObject.getContentType(),
	dimensions: await imageObject.getDimensions(),
	ext: await imageObject.getExt(),
	hash: await imageObject.getHash(),
	hashKey: await imageObject.getHashKey(),
	height: await imageObject.getHeight(),
	size: await imageObject.getSize(),
	type: await imageObject.getType(),
	width: await imageObject.getWidth(),
});

test('get all meta', async () => {
	const logo = await image(logoPath);
	const meta = await getMeta(logo);
	const result = {
		contentType: 'image/png',
		dimensions: { height: 512, width: 512 },
		ext: 'png',
		hash: '8D7C7CD5A8A0D07FA0FD8E2BF4B83E31',
		hashKey: '8/D/8D7C7CD5A8A0D07FA0FD8E2BF4B83E31.png',
		height: 512,
		size: 19805,
		type: 'png',
		width: 512,
	};

	expect(meta).toEqual(result);
});

test('identify', async () => {
	const logo = await image(logoPath);
	const identity = await logo.identify();

	expect(identity.Format).toEqual('PNG (Portable Network Graphics)');
});

test('throw error when no image provided', () => {
	const logo = image();

	expect(logo).rejects.toThrow();
});

test('load image from url', async () => {
	const logo = await image(`https://raw.githubusercontent.com/Prefinem/lambda-image/master/docs/logo.png`);
	const meta = await getMeta(logo);
	const result = {
		contentType: 'image/png',
		dimensions: { height: 512, width: 512 },
		ext: 'png',
		hash: '8D7C7CD5A8A0D07FA0FD8E2BF4B83E31',
		hashKey: '8/D/8D7C7CD5A8A0D07FA0FD8E2BF4B83E31.png',
		height: 512,
		size: 19805,
		type: 'png',
		width: 512,
	};

	expect(meta).toEqual(result);
});

test('load image from base64', async () => {
	const base64 = require('fs')
		.readFileSync('./tests/base64.txt')
		.toString();
	const logo = await image(base64);
	const meta = await getMeta(logo);
	const result = {
		contentType: 'image/png',
		dimensions: { height: 512, width: 512 },
		ext: 'png',
		hash: '8D7C7CD5A8A0D07FA0FD8E2BF4B83E31',
		hashKey: '8/D/8D7C7CD5A8A0D07FA0FD8E2BF4B83E31.png',
		height: 512,
		size: 19805,
		type: 'png',
		width: 512,
	};

	expect(meta).toEqual(result);
});

test('throw error when base save command', async () => {
	const logo = await image(logoPath);

	expect(() => logo.save([])).toThrow();
});

test('save to and load from s3', async () => {
	const logo = await image(logoPath);

	await logo.save({ bucket: 'prefinem', key: 'lambda-image/logo.png' }, { profile: 'william' });

	const s3Logo = await image({ bucket: 'prefinem', key: 'lambda-image/logo.png' }, { profile: 'william' });
	const meta = await getMeta(s3Logo);
	const result = {
		contentType: 'image/png',
		dimensions: { height: 512, width: 512 },
		ext: 'png',
		hash: '8D7C7CD5A8A0D07FA0FD8E2BF4B83E31',
		hashKey: '8/D/8D7C7CD5A8A0D07FA0FD8E2BF4B83E31.png',
		height: 512,
		size: 19805,
		type: 'png',
		width: 512,
	};

	expect(meta).toEqual(result);
});
