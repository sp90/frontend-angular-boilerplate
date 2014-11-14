//Core Node.js
var path = require('path');

//External Dependencies
var express = require('express'),
    morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/dist')));

//Needed for source maps to work.
if(process.env.NODE_ENV === 'development') {
   app.use('/', express.static(path.join(__dirname, '/')));
}

app.all('*', function (req, res) {
   return res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(3000);

console.log('listening on port 3000');
