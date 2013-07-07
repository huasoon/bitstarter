var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());

//readFileSync returns a buffer if no encoding is specified,
var buffer = fs.readFileSync('index.html');
app.get('/', function(request, response) 
{
	//toString default to utf8. Adding to illustrate it
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


