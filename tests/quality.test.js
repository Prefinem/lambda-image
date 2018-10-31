const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const tempPath = path.resolve(path.join(__dirname, './../temp'));
const image = require('./../src/index');
const fs = require('fs-extra');

test('test quality', async () => {
	await fs.ensureDir(tempPath);

	const logo = await image(logoPath);
	const transformedLogo = await image(await logo.quality(80));
	const temp = path.join(tempPath, 'quality1.png');

	transformedLogo.save(temp);

	const testImage = await image(temp);
	const results = await testImage.getSize();

	expect(results).toEqual(5826);
	await fs.remove(temp);
});
