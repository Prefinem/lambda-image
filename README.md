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
const Image = require('lambda-image');
```
