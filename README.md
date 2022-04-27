# build-id
![npm bundle size](https://img.shields.io/bundlephobia/min/build-id) [![Publish Docker Image](https://github.com/sid86-dev/build-id/actions/workflows/docker-image.yml/badge.svg)](https://github.com/sid86-dev/build-id/actions/workflows/docker-image.yml)
#### Custom length randomized Id generator for node.js

```js
const buildId = require('build-id');

var id = buildId(5);

console.log(id);
// xs2Nu
```
<br>

#### Default value is `7` char
> If no value is passed within the function, it will return a value with 7 characters.

```js
const buildId = require('build-id');

var id = buildId(7);

console.log(id);
// nYa5Sbk
```
