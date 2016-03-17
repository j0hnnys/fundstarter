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
