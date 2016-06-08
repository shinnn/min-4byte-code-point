'use strong';

const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const test = require('tape');

function runTest(description, min4byteCodePoint) {
  test(description, t => {
    t.strictEqual(
      min4byteCodePoint,
      0x10000,
      'should be equal to 0x10000.'
    );

    t.strictEqual(
      new Buffer(String.fromCodePoint(min4byteCodePoint)).byteLength,
      4,
      'should be a code point of a 4 byte character.'
    );

    t.strictEqual(
      new Buffer(String.fromCodePoint(min4byteCodePoint - 1)).byteLength,
      3,
      'should be the minimum code point of a 4 byte characters.'
    );

    t.end();
  });
}

runTest('require(\'min-4byte-code-point\')', require('.'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.min4byteCodePoint', global.window.min4byteCodePoint);

rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});

