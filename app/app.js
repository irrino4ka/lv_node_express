var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );

app.get('/', function(req, res){
	var info = '';
	dataFile.eneida.forEach(function(item){
		info += `
		<li>
			<b>${item.row}</b>
			<p>${item.text}</p>
		</li>

		`;
	})
	res.send(`<h1>Hello !</h1>
			${info}
		`)
}) ;

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});