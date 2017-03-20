var express = require('express');
var router = express.Router();


var piratesArray = require('../models/pirates.js');


//Routes
router.get('/', function(req, res){
	//'pirates' already in a stuctured array, just throw it in
	res.render('index', {
		piratesArray: piratesArray
	});
});







//Exports, the throw
module.exports = router;