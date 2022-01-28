const assert = require('assert');
const { hello } = require('../src/index');

describe('Test in index.js', () => {
    describe('should call hello()', () => {
        it('should return a string representing a greeting', () => {
            assert.equal(hello(), 'hello');
        });
    });
});