 
var express = require('express')
var init = require('./src/index');
var debug = require('debug')('my-application'); // debug模块

var app = new express()
app.set('port', process.env.PORT || 3000); // 设定监听端口
 
//启动监听
var server = app.listen(app.get('port'), function() {
  init('init')
  debug('Express server listening on port ' + server.address().port);
});
 