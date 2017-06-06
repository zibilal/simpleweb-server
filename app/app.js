/**
 * Created by zibilal on 6/6/17.
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About Us');
});

app.use(express.static('app/public'));

app.listen(PORT, function() {
    console.log('Starting server at port ' + PORT);
});