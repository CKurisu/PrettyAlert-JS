if (typeof window !== 'undefined') {
    require('./prettyalert.css');
}

require('./polyfills');

const swal = require('./core').default;

module.exports = swal;