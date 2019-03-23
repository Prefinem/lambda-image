const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

test('test rotate', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.rotate(45));
	const temp = path.join(tempPath, 'rotate1.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 726, width: 726 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});

test('test rotate with background color', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.rotate(45, 'blue'));
	const temp = path.join(tempPath, 'rotate2.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 726, width: 726 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});

test('test rotate 3', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.rotate(90));
	const temp = path.join(tempPath, 'rotate3.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 512, width: 512 });
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});
