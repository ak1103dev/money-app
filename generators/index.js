const containerGenerator = require('./container/index.js');
const componentGenerator = require('./component/index.js');

module.exports = function func(plop) {
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('component', componentGenerator);
};
