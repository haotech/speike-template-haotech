const view = require('think-view');
const model = require('think-model');
const proxy = require('../proxy/index.js');

module.exports = [
  view, //make application support view
  model(think.app),
  proxy
];

