const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

test('test crop', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.crop(256, 128));
	const temp = path.join(tempPath, 'crop.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 128, width: 256 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();

	await fs.remove(temp);
});

test('test crop2', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.crop(256, 512));
	const temp = path.join(tempPath, 'crop2.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 512, width: 256 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();

	await fs.remove(temp);
});

test('test crop3', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.crop(512, 128));
	const temp = path.join(tempPath, 'crop3.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 128, width: 512 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();

	await fs.remove(temp);
});
