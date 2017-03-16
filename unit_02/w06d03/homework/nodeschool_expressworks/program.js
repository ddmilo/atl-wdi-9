var express = require('express');
var app = express();
var bodyparser= require('body-parser');

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


app.post('/form', function(req, res){
	var str = req.body.str
	res.end(req.body.str.split('').reverse().join(''));

})






















app.listen(process.argv[2])