require('node-jsx').install({
  harmony:true
});
var router = require('koa-router');
var webpack = require('webpack');
var app = require('koa')();
app.use(router(app));
app.use(require('koa-webpack-dev-test-server').middleware());
var port = 8000;
require('./example/code-share/server')(app);
app.listen(port);
console.log('server start at ' + port);