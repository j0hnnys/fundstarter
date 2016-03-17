/*
// Part 1
var fs = require('fs');

// Reads index.html file asynchronously
fs.readFile('index.html', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// Reads index.html synchronously
var rfs = fs.readFileSync('index.html', 'utf-8');
console.log(rfs);

return true;
*/
var express = require('express')
var app = express()

/* serves all the static files*/
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

/*serves main page*/
app.get('/', function(request, response) {
response.sendfile('index.html') 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})