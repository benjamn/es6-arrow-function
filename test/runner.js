/**
 * We pull in example files from test/examples/*.js. Write your assertions in
 * the file alongside the ES6 class "setup" code. The node `assert` library
 * will already be in the context.
 */

var compile = require('../lib').compile;
require('example-runner').runCLI(function(source) {
  return compile(source).code;
});
