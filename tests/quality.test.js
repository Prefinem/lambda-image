/* eslint-disable max-statements */
const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

test('test quality', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.quality(80));
	const temp = path.join(tempPath, 'quality1.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const results = await testImage.getSize();

	expect(results).toBeLessThan(6000);
	expect(results).toBeGreaterThan(5700);
	expect(transformedLogo.toBuf()).toMatchImageSnapshot();
	await fs.remove(temp);
});
