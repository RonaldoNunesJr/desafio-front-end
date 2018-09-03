var express = require('express');
var app = express();

app.use('/', express.static('htdocs'));

app.use('/images', express.static('htdocs/assets/media'));

app.listen(3000, function() {
	console.log('listen on http://localhost:3000');
});
