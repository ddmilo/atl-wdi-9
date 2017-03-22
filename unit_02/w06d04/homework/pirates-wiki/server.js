//Requirements
var express = require('express');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser');


var piratesController = require('./controllers/pirates_controller.js')
app.use('/pirates', piratesController)

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');

//Controller






//Port listen
var port = 3000;
app.listen(port);
