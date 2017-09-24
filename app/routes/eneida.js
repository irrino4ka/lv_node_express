var express = require('express');
var router = express.Router();

router.get('/eneida', function(req, res){
	var data = req.app.get('appData');
	var eneidaRow = data.eneida;
	res.render('eneida',{
		pageTitle: 'Енеїда 20 рядків',
		allEneida: eneidaRow,
		pageId: 'eneida'
	});
}) ;



router.get('/eneida/:eneidaid', function(req, res){
	var data = req.app.get('appData');
	var pageRow = [];

	data.eneida.forEach(function(item){
		if (item.row == req.params.eneidaid){
			pageRow.push(item);
		}
	})

	res.render('eneida',{
		pageTitle: 'Енеїда окремий рядок',
		allEneida: pageRow,
		pageId: 'eneidaRow'
	});
}) ;




module.exports = router;

/*
router.get('/eneida/:eneidaid', function(req, res){
	var dataFile = req.app.get('appData');
	var eneidaRow = dataFile.eneida[req.params.eneidaid];
	res.send(`
		<h1>${eneidaRow.row}</h1>
		<p>	${eneidaRow.text}</p>
		`)
}) ;*/