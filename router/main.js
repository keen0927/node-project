var express = require('express');
var app = express();
var router = express.Router(); 
var path = require('path');

router.get('/', function(req, res) {
    console.log('main js loaded');
	res.sendFile(path.join(__dirname, '../public/main.html'))
});

router.get('/form', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/form.html'))
});

module.exports = router;