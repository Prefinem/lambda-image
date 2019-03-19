const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

test('test resizeAndCropCenter', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resizeAndCropCenter(256, 128));
	const temp = path.join(tempPath, 'resizeAndCropCenter.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 128, width: 256 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();

	await fs.remove(temp);
});

test('test resizeAndCropCenter2', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resizeAndCropCenter(512, 256));
	const temp = path.join(tempPath, 'resizeAndCropCenter2.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 512 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});

test('test resizeAndCropCenter3', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resizeAndCropCenter(128, 256));
	const temp = path.join(tempPath, 'resizeAndCropCenter3.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 128 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});

test('test resizeAndCropCenter4', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resizeAndCropCenter(256, 256));
	const temp = path.join(tempPath, 'resizeAndCropCenter4.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 256 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});
