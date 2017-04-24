var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');

var dontsController = require('./controllers/todonts_controller.js');
app.use('/todonts', dontsController);



// var port = 3000;
app.listen(3000);