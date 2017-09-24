var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send(`<h1>Eneida with routes.</h1>
			<h2>Welcome!</h2>
		`)
}) ;

module.exports = router;