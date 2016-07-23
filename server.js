/**
 * Created by yoniji on 7/23/16.
 */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

var port = 3000;
app.set('port', (process.env.PORT || port));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
  }
});
