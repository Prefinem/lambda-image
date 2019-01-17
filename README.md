<h1 align="center">
	<br>
	<a href="https://github.com/Prefinem/simple-icon-generator"><img src="https://raw.githubusercontent.com/Prefinem/lambda-image/master/docs/logo.png" alt="lambda-image" width="200"></a>
	<br>
<!--
https://prefinem.com/simple-icon-generator/#eyJiYWNrZ3JvdW5kQ29sb3IiOiJyZ2IoMjAzLCA1NiwgNTUpIiwiYm9yZGVyQ29sb3IiOiJ3aGl0ZSIsImJvcmRlcldpZHRoIjoiMCIsImV4cG9ydFNpemUiOjUxMiwiZXhwb3J0aW5nIjpmYWxzZSwiZm9udEZhbWlseSI6IkFkdmVudCBQcm8iLCJmb250UG9zaXRpb24iOiI4MyIsImZvbnRTaXplIjoiMTAwIiwiZm9udFdlaWdodCI6NjAwLCJpbWFnZSI6IiIsImltYWdlTWFzayI6IiIsImltYWdlU2l6ZSI6NTAsInNoYXBlIjoic3F1YXJlIiwidGV4dCI6Is67In0
-->
</h1>

<!-- NPM -->

[![Version](https://flat.badgen.net/npm/v/lambda-image)](https://npmjs.org/package/lambda-image)
[![Version](https://flat.badgen.net/npm/dw/lambda-image)](https://npmjs.org/package/lambda-image)

<!-- GitHub -->

[![Issues](https://flat.badgen.net/github/issues/Prefinem/lambda-image)](https://github.com/Prefinem/lambda-image)
[![Stars](https://flat.badgen.net/github/stars/Prefinem/lambda-image)](https://github.com/Prefinem/lambda-image)
[![Open PRs](https://flat.badgen.net/github/open-prs/Prefinem/lambda-image)](https://github.com/Prefinem/lambda-image)
[![License](https://flat.badgen.net/github/license/Prefinem/lambda-image)](https://github.com/Prefinem/lambda-image)

<!-- Dependencies -->

[![Dependencies](https://flat.badgen.net/david/dep/Prefinem/lambda-image)](https://david-dm.org/Prefinem/lambda-image)
[![DevDependencies](https://flat.badgen.net/david/dev/Prefinem/lambda-image)](https://david-dm.org/Prefinem/lambda-image?type=dev)
[![PeerDependencies](https://flat.badgen.net/david/peer/Prefinem/lambda-image)](https://david-dm.org/Prefinem/lambda-image?type=peer)

<!-- PackagePhobia -->

[![Install Size](https://flat.badgen.net/packagephobia/install/lambda-image)](https://packagephobia.now.sh/result?p=lambda-image)
[![Publish Size](https://flat.badgen.net/packagephobia/publish/lambda-image)](https://packagephobia.now.sh/result?p=lambda-image)

<!-- Travis -->

[![Build Status](https://flat.badgen.net/travis/Prefinem/lambda-image)](https://travis-ci.com/Prefinem/lambda-image)

<!-- CodeCov -->

[![Code Coverage](https://flat.badgen.net/codecov/c/github/Prefinem/lambda-image)](https://codecov.io/gh/Prefinem/lambda-image)

<!-- CodeClimate -->

[![Technical Debt](https://flat.badgen.net/codeclimate/tech-debt/Prefinem/lambda-image)](https://codeclimate.com/github/Prefinem/lambda-image)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/Prefinem/lambda-image)](https://codeclimate.com/github/Prefinem/lambda-image)
[![Coverage](https://flat.badgen.net/codeclimate/coverage/Prefinem/lambda-image)](https://codeclimate.com/github/Prefinem/lambda-image)

Lambda Image is a simple image class to allow to easily manipulate images on AWS Lambda

## WARNING

If you wish to download an image from a url, you must install `got` as a package in your project.
If you wish to be able to load and save to s3, (and you aren't on aws lambda) you must install `aws-sdk` as a package in your project.

## Getting Started

```js
const lambdaImage = require('lambda-image');

const image = await lambdaImage('/path/to/image.png');

const { height, width } = await image.getDimensions();

const resizedImage = await lambdaImage(await image.resize(512, 512));

await resizedImage.save({ bucket: 's3bucker', key: await resizeImage.getHashKey() });
```

## lambdaImage(loadInfo, loadOptions)

Returns a image object. Must be called with `await`

`loadInfo` can be either a

-   buffer
-   object with `{ bucket, key }` for an s3 file
-   base64 image with `data:{contentType};base64` prefix
-   url
-   file path

If a url is provided, you must provide the [got](https://npmjs.com/package/got) library in your dependecies.

`loadOptions` is an object that can contain a profile of your aws credentials

```js
const options = {
	profile: 'default',
};
```

## API

-   `image.getContentType()` Get the mime type
-   `image.getDimensions()` Get the dimensions in an object `{ height, width }`
-   `image.getExt()` Get the image extension
-   `image.getHash()` Get the md5 hash of the image
-   `image.getHashKey()` Get the save key based on the md5 hash `2C2A8686BFA31A2AE5F55A7F60009E14 => 2/C/2C2A8686BFA31A2AE5F55A7F60009E14.png`
-   `image.getHeight()` Get the height of the image
-   `image.getSize()` Get the image file size in bytes
-   `image.getType()` Get the image extension
-   `image.getWidth()` Get the width of the image
-   `image.identify()` Get the data from `imagemagick identify`
-   `image.quality(percentage)` Returns the buffer for the image when quality of percentage is applied
-   `image.resize(width, height)` Returns the buffer for the image when resized to width / height - **Does not crop**
-   `image.resizeAndCropCenter(width, height)` Returns the buffer for the image when resized to width / height after cropping
-   `image.save(saveInfo, saveOptions = loadOptions)` Saves the image based on the saveInfo and saveOptions
-   `image.toBase64()` Converts the image to base64 with the `data:{contentType};base64` prefix
-   `image.toBase64Binary()` Converts the image to base64 without the `data:{contentType};base64` prefix
-   `image.toBuf()` Converts the image to a buffer

## image.save(saveInfo, saveOptions)

`saveInfo` can be either a

-   object with `{ bucket, key }` to save to an s3 bucket
-   file path

`loadOptions` is an object that can contain a profile of your aws credentials. This will default to `saveOptions`

```js
const options = {
	profile: 'default',
};
```
