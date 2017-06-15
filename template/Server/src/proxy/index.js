const Proxy = require('speike-proxy');
const userApi = require('./user.js');

const proxy = new Proxy({
  baseUrl: 'http://xxx.com',
  api: Object.assign({},
    userApi
  ),
  mock: true
});

const extend = {proxy};
module.exports = {
  think: extend,
  application: extend,
  context: extend,
  controller: extend
};