var express = require('express');
var router = express.Router();


var piratesArray = require('../models/pirates.js');


//Routes
router.get('/', function(req, res){
	//'pirates' already in a stuctured array, just throw it in
	res.render('index', {
		pirates: piratesArray
	});
});


//Get a speicfic Pirate
router.get('/:id', function(req, res){
	var somePirate = piratesArray[req.params.id];

	res.render('show', {
		pirates: somePirate
	});
});







//Exports, the throw
module.exports = router;