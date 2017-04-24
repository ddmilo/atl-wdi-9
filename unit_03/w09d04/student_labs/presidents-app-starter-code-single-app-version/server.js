// Define Variables and import stuff
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// Connect to DB

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/presidents-app');

<<<<<<< HEAD
// Load in routes
=======
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

>>>>>>> 12ea09fd86fdceb94dc04ff94bd570dd6ceef658
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

app.use(cors());

<<<<<<< HEAD
// Set up engine stuff and middleware
// Defiining what views to use and what templating engine if we need it.
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
=======
>>>>>>> 12ea09fd86fdceb94dc04ff94bd570dd6ceef658
app.use(express.static('public'));

// Start the server
app.listen(3000);

//
