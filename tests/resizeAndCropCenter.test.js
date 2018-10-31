const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');

test('test resizeAndCropCenter', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resizeAndCropCenter(256, 128));
	const temp = path.join(tempPath, 'resizeAndCropCenter.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 128, width: 256 });
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
	await fs.remove(temp);
});
