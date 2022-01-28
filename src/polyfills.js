/**
 * Promise polyfill
 */
const Promise = require("promise-polyfill");
if (typeof window !== 'undefined' && !window.Promise) {
    window.Promise = Promise
}
/**
 * Object.assign() polyfill
 */

require('es6-object-assign/auto');
/**
 * String.prototype.includes() polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#polyfill
 */
if (!String.prototype.includes) {
    String.prototype.includes = (search, start) => {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
/**
 * Array.prototype.includes() polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill
 */