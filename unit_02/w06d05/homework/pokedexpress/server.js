//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require('express');
var hbs = require('hbs');
var methodOverride = require('method-override');
var app = express();
var bodyParser = require('body-parser');




//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');


//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')




//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
var port = 3000;
app.listen(port);
