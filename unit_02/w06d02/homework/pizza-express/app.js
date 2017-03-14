var express = require('express');
var app = express();
var port = 3000;
var hbs = require('hbs');


app.set('view engine', 'hbs');
app.set('views', './views');

app.listen(port, function(){
	console.log('I hear you');	
});

app.get('/', function(req, res){
	res.send("Welcome to Pizza Express!");
});

app.get('/topping/:type', function(req, res, next){
	res.send(req.params.type + '!' + ' ' + 'Good Choice!');

});

app.get('/order/:amount/:size', function (req, res, next) {
	res.send("You ordered" + ' ' + req.params.amount + ' ' + req.params.size + ' ' + "Pizzas");
});

