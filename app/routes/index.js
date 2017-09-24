var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send(`
		<link rel="stylesheet" type="text/css" href="/style.css">
		<h1>Eneida with routes.</h1>
			<h2>Welcome!</h2>
		`)
}) ;

module.exports = router;