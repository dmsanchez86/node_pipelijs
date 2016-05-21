var express = require('express');
var path = require("path");
var app = express();
var port = 5858;
  
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './public', 'index.html'));
})
 
app.listen(port);

console.log("Server running in the port: ${port}");