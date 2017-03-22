var express = require('express');
var router = express.Router();

var data = require('../data.js');

router.get('/', function(req, res){
	res.render('index', {
		toDonts: data.seededToDonts
	});
});

router.get('/:id', function(req,res) {
  var toDont = data.seededToDonts[req.params.id];

  res.render('shows', {
    toDont: toDont
  });
});




module.exports = router;