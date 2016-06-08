# min-4byte-code-point

[![NPM version](https://img.shields.io/npm/v/min-4byte-code-point.svg)](https://www.npmjs.com/package/min-4byte-code-point)
[![Bower version](https://img.shields.io/bower/v/min-4byte-code-point.svg)](https://github.com/shinnn/min-4byte-code-point/releases)
[![Build Status](https://travis-ci.org/shinnn/min-4byte-code-point.svg?branch=master)](https://travis-ci.org/shinnn/min-4byte-code-point)
[![devDependency Status](https://david-dm.org/shinnn/min-4byte-code-point/dev-status.svg)](https://david-dm.org/shinnn/min-4byte-code-point#info=devDependencies)

The minimum code point of 4 byte characters in [UTF-8](https://tools.ietf.org/html/rfc3629)

```javascript
import MIN_4BYTE_CODE_POINT from 'min-4byte-code-point';

MIN_4BYTE_CODE_POINT //=> 65536
MIN_4BYTE_CODE_POINT === 0x10000; //=> true

new Buffer(String.fromCodePoint(MIN_4BYTE_CODE_POINT)).byteLength; //=> 4
new Buffer(String.fromCodePoint(MIN_4BYTE_CODE_POINT - 1)).byteLength; //=> 3
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install min-4byte-code-point
```

#### [bower](http://bower.io/)

```
bower install min-4byte-code-point
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/min-4byte-code-point/master/browser.js)

## License

[The Unlicense](./LICENSE)
