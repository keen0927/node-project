var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var main = require('./router/main');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	port: 3306,
// 	user: 'root',
// 	password: 'z3228314',
// 	database: 'nodeproject'
// });

// connection.connect();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(req,res) {
	console.log('서버 시작');
});

// app.get('/', function(req,res) {
// 	res.sendFile(__dirname + '/public/main.html');
// });

app.use('/', main);
app.use('/main', main);
app.use('/form', main);


app.post('/email_post', function(req, res) {
	console.log(req.body.email);
	//res.send('<h1>welcome '+ req.body.email +'</h1>')
	res.render('email.ejs', {'email' : req.body.email});
});

app.post('/ajax_send_email', function(req, res) {
	var email = req.body.email;
	var responsData = {};
	// var query = connection.query('select name from user where email="' + email +'"', function(err, rows) {
	// 	if(err) throw err;
	// 	if(rows[0]) {
	// 		console.log(rows[0].name)
	// 		responseData.result = "ok";
	// 		responseData.name = rows[0].name;
	// 	} else {
	// 		responseData.result = "none";
	// 		responseData.name = "";
	// 		console.log('none : ' + rows[0])
	// 	}
	// 	res.join(responseData)
	// })
});
