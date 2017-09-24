var express = require('express');
var router = express.Router();

router.get('/eneida', function(req, res){
	var dataFile = req.app.get('appData');
	var info = '';
	dataFile.eneida.forEach(function(item){
		info += `
		<li style="list-style-type:none;">
			<p>${item.text}</p>
		</li>

		`;
	})
	res.send(`<h1>Енеїда</h1>
			${info}
		`)
}) ;

router.get('/eneida/:eneidaid', function(req, res){
	var dataFile = req.app.get('appData');
	var eneidaRow = dataFile.eneida[req.params.eneidaid];
	res.send(`
		<h1>${eneidaRow.row}</h1>
		<p>	${eneidaRow.text}</p>
		`)
}) ;

module.exports = router;