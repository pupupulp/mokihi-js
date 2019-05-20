# mokihi-js
MōkihiJS

[![npm version](https://badgen.net/npm/v/mokihi-js)](https://www.npmjs.com/package/mokihi-js)
[![npm downloads](https://badgen.net/npm/dw/mokihi-js)](https://www.npmjs.com/package/mokihi-js)
[![npm downloads](https://badgen.net/npm/dm/mokihi-js)](https://www.npmjs.com/package/mokihi-js)
[![npm downloads](https://badgen.net/npm/dy/mokihi-js)](https://www.npmjs.com/package/mokihi-js)
[![npm downloads](https://badgen.net/npm/dt/mokihi-js)](https://www.npmjs.com/package/mokihi-js)
[![node](https://badgen.net/npm/node/mokihi-js)](https://www.npmjs.com/package/mokihi-js)
![contributors](https://badgen.net/github/contributors/pupupulp/mokihi-js)
![stars](https://badgen.net/github/stars/pupupulp/mokihi-js)
![commits](https://badgen.net/github/commits/pupupulp/mokihi-js)
![last commit](https://badgen.net/github/last-commit/pupupulp/mokihi-js)
[![License](https://badgen.net/github/license/pupupulp/mokihi-js)](https://github.com/pupupulp/mokihi-js/blob/master/LICENSE)

An opensource package for ExtJS 6.2.0 GPL bundled with a collection of useful component wrapper functions.

## Quickstart

### Installation

```
$ npm install --save mokihi-js
```

### Usage (NPM):

`const Mokihi = require('mokihi-js');`

### Example (Using express and express-es6-template-engine):

@app.js

```javascript
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const MokihiSetup = require('mokihi-js').setup;
const Mokihi = require('mokihi-js').core;

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('template', {
        locals: {
            MokihiCss: MokihiSetup.loadExtJsCss(),
            MokihiScript: MokihiSetup.loadExtJsScript(),
            Mokihi
        }
    });
});

app.listen(3000);
```

@template.html

```html
<!DOCTYPE html>
<html>
<head>
    <style>${MokihiCss}</style>
    <script type="text/javascript">${MokihiScript}</script>
    <script type="text/javascript"> var Mokihi = ${Mokihi}; </script>
</head>
<body>
</body>
</html>
```

### Running Tests

`$ npm test`

## Documentation

comming soon..