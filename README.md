# makeId
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
