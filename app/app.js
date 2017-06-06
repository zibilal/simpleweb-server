/**
 * Created by zibilal on 6/6/17.
 */

var express = require('express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About Us');
});

app.use(express.static('app/public'));

app.listen(3000, function() {
    console.log('Starting server at port 3000 ' + __dirname);
});