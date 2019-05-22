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

### Table of Contents

- [Component](#component)
- [Ajax](#ajax)

### Features

#### Component

- **query**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Mokihi.component.query('button[reference = sample-button]');
 *
 * @param {string} queryString
 */
Mokihi.component.query(queryString);
```

- **getByReference**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Mokihi.component.getByReference('button', 'sample-button');
 *
 * @param {string} component
 * @param {string} reference
 */
Mokihi.component.getByReference(component, reference);
```

#### Ajax

- **request**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Mokihi.ajax.request('/login', 'POST', { user: john, pass: doe }, function (){}, function (){}, false);
 *
 * @param {string} url
 * @param {string} method
 * @param {object} params
 * @param {function} sucessCallback
 * @param {function} failureCallback
 * @param {boolean} async
 */
Mokihi.ajax.request(url, method, params, sucessCallback, failureCallback, async);
```

- **get**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Mokihi.ajax.get('/login', { user: john, pass: doe }, function (){}, function (){}, false);
 *
 * @param {string} url
 * @param {object} params
 * @param {function} sucessCallback
 * @param {function} failureCallback
 * @param {boolean} async
 */
Mokihi.ajax.get(url, params, sucessCallback, failureCallback, async);
```

- **post**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Mokihi.ajax.post('/login', { user: john, pass: doe }, function (){}, function (){}, false);
 *
 * @param {string} url
 * @param {object} params
 * @param {function} sucessCallback
 * @param {function} failureCallback
 * @param {boolean} async
 */
Mokihi.ajax.post(url, params, sucessCallback, failureCallback, async);
```

- **put**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Mokihi.ajax.put('/login', { user: john, pass: doe }, function (){}, function (){}, false);
 *
 * @param {string} url
 * @param {object} params
 * @param {function} sucessCallback
 * @param {function} failureCallback
 * @param {boolean} async
 */
Mokihi.ajax.put(url, params, sucessCallback, failureCallback, async);
```

- **delete**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Mokihi.ajax.delete('/login', { user: john, pass: doe }, function (){}, function (){}, false);
 *
 * @param {string} url
 * @param {object} params
 * @param {function} sucessCallback
 * @param {function} failureCallback
 * @param {boolean} async
 */
Mokihi.ajax.delete(url, params, sucessCallback, failureCallback, async);
```


## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/pupupulp/mokihi-js/issues/new).

### Related Projects

You might want to checkout these projects:

- [NchikotaJS](https://github.com/pupupulp/nchikota-js) - An opensource tech stack composed of ExpressJS, NodeJS, ExtJS.
- [PasserelleJS](https://github.com/pupupulp/passerelle-js) - An opensource API gateway built with ExpressJS.
- [KonyvtarJS](https://github.com/pupupulp/konyvtar-js) - An opensource library/package of code wrappers for ExtJS 6.2.0 GPL.

### Author

**Eagan Martin**
- [Github](https://github.com/pupupulp)
- [LinkedIn]()

### License

Copyright © 2019, [Eagan Martin](https://pupupulp.github.io/). Release under the [GPL-3.0 License](https://github.com/pupupulp/mokihi-js/blob/master/LICENSE)