const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');

test('test resize', async () => {
	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resize(256));
	const temp = path.join(tempPath, 'resize1.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 256 });
	await fs.remove(temp);
});

test('test resize default width', async () => {
	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resize(null, 256));
	const temp = path.join(tempPath, 'resize1.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 256 });
	await fs.remove(temp);
});

test('test resize height and width', async () => {
	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resize(256, 256));
	const temp = path.join(tempPath, 'resize2.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 256 });
	await fs.remove(temp);
});

test('test resize keeps scale', async () => {
	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.resize(256, 512));
	const temp = path.join(tempPath, 'resize3.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const dimensions = await testImage.getDimensions();

	expect(dimensions).toEqual({ height: 256, width: 256 });
	await fs.remove(temp);
});
