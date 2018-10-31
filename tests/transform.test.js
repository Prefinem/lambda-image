const path = require('path');
const logoPath = path.resolve(path.join(__dirname, './../docs/logo.png'));
const image = require('./../src/index');

test('test transform to base64', async () => {
	const logo = await image(logoPath);
	const base64 = await logo.toBase64();

	expect(base64.slice(0, 42)).toEqual(`data:image/png;base64,iVBORw0KGgoAAAANSUhE`);
});

test('test transform to base64Binary', async () => {
	const logo = await image(logoPath);
	const base64Binary = await logo.toBase64Binary();

	expect(base64Binary.slice(0, 20)).toEqual(`iVBORw0KGgoAAAANSUhE`);
});

test('test transform to buf', async () => {
	const logo = await image(logoPath);
	const buf = await logo.toBuf();

	expect(Buffer.isBuffer(buf)).toEqual(true);
});
