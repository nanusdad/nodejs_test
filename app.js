var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World from Node.js and Express !!');
});

app.listen(3000);
console.log('Listening on port 3000');
