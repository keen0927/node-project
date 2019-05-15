var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(req,res) {
	console.log('서버 시작');
});

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/public/main.html');
});

app.post('/email_post', function(req, res) {
	console.log(req.body.email);
	res.send('<h1>welcome !' + req.body.email + '</h1>');
});