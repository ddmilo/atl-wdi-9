var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var crypto = require('crypto');

app.use(bodyparser.urlencoded({
	extended: false
}))



// Hello World

// app.get('/home', function(req, res) {
//    res.end('Hello World!')
// })


//Static

// app.use(express.static(process.argv[3] || path.join(__dirname, '/public')));


//Good Old Form


// app.post('/form', function(req, res){
// 	var str = req.body.str
// 	res.end(req.body.str.split('').reverse().join(''));

// })



//Params Pam Pam

// app.put('/message/:id', function(req, res){
// 	var id = req.params.id;
// 	res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));

// })




//What's In Query


// app.get('/search', function(req, res){
// 	res.send(req.query);
// })



//Port stuff
app.listen(process.argv[2])