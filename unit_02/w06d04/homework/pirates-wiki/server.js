//Requirements
var express = require('express');
var app = express();
var hbs = require('hbs');


//Controller
var piratesController = require('./controllers/pirates_controller.js')
app.use('/pirates', piratesController)

app.set('view engine', 'hbs');





//Port listen
var port = 3000;
app.listen(port); 
