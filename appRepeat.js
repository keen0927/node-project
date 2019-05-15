var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function(req,res) {
	console.log('서버 시작');
});


app.get('/', function(req,res) {
	res.sendFile(__dirname + '/public/main.html');
});