<h1 align="center">
	<br>
	<a href="https://github.com/Prefinem/simple-icon-generator"><img src="https://raw.githubusercontent.com/Prefinem/lambda-image/master/docs/logo.png" alt="lambda-image" width="200"></a>
	<br>
<!--
https://prefinem.com/simple-icon-generator/#eyJiYWNrZ3JvdW5kQ29sb3IiOiJyZ2IoMjAzLCA1NiwgNTUpIiwiYm9yZGVyQ29sb3IiOiJ3aGl0ZSIsImJvcmRlcldpZHRoIjoiMCIsImV4cG9ydFNpemUiOjUxMiwiZXhwb3J0aW5nIjpmYWxzZSwiZm9udEZhbWlseSI6IkFkdmVudCBQcm8iLCJmb250UG9zaXRpb24iOiI4MyIsImZvbnRTaXplIjoiMTAwIiwiZm9udFdlaWdodCI6NjAwLCJpbWFnZSI6IiIsImltYWdlTWFzayI6IiIsImltYWdlU2l6ZSI6NTAsInNoYXBlIjoic3F1YXJlIiwidGV4dCI6Is67In0
-->
</h1>

[![npm pack age](https://nodei.co/npm/lambda-image.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/lambda-image)

[![Version](https://badge.fury.io/js/lambda-image.svg)](https://npmjs.org/package/lambda-image) [![Build Status](https://travis-ci.org/Prefinem/lambda-image.svg)](https://travis-ci.org/Prefinem/lambda-image)

[![Maintainability](https://api.codeclimate.com/v1/badges/9755ccf58efb3b99f223/maintainability)](https://codeclimate.com/github/Prefinem/lambda-image/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/9755ccf58efb3b99f223/test_coverage)](https://codeclimate.com/github/Prefinem/lambda-image/test_coverage) [![Greenkeeper badge](https://badges.greenkeeper.io/Prefinem/lambda-image.svg)](https://greenkeeper.io/)

![Weekly Downloads](https://img.shields.io/npm/dw/lambda-image.svg) ![Monthly Downloads](https://img.shields.io/npm/dm/lambda-image.svg) ![Yearly Downloads](https://img.shields.io/npm/dy/lambda-image.svg)

![Issues](https://img.shields.io/github/issues/Prefinem/lambda-image.svg) ![Pull Requests](https://img.shields.io/github/issues-pr/Prefinem/lambda-image.svg)

![Dependencies](https://david-dm.org/Prefinem/lambda-image.svg) ![Dev Dependencies](https://david-dm.org/Prefinem/lambda-image/dev-status.svg)

[![Install Size](https://badgen.now.sh/badge/install%20size/34.3%20kB/44CC11)](https://packagephobia.now.sh/result?p=lambda-image)

Lambda Image is a simple image class to allow to easily manipulate images on AWS Lambda

## WARNING

If you wish to download an image from a url, you must install `got` as a package in your project.
If you wish to be able to load and save to s3, (and you aren't on aws lambda) you must install `aws-sdk` as a package in your project.

## Getting Started

```js
const Image = require('lambda-image');
```

