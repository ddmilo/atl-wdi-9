var express = require('express');
var router = express.Router();
var data = require('../models/pirates.js');


//Routes
router.get('/', function(req, res){
	res.render('index', {
		pirates: data
	});
});

//Create new pirate
router.get('/new', function(req, res) {
	res.render('new', {

	});
});



//Get a speicfic Pirate
router.get('/:id', function(req, res){
	res.render('show', {
		aPirate: data[req.params.id]
	});
});

//post new pirate
router.post('/', function(req, res) {
	data.push(req.body);
	res.redirect('/pirates');
});







//Exports, the throw
module.exports = router;
