const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function(req, res) {
    console.log('111');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/main.html');
})