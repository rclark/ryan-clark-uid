var cuid = require('cuid');

module.exports = function() {
  return cuid().split('').reverse().join('');
};
