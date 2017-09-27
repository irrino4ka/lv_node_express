var express = require('express');
var router = express.Router();
var fs = require('fs');

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

router.post('/eneida', function(req, res){
	var data = req.app.get('appDataTest');

	var newRecord = {
		row : req.body.row,
		text : req.body.text
	} 
	data.eneida.push(newRecord)

	fs.writeFile('./app/data/myjsonfile.json', JSON.stringify(data.eneida), 'utf8');
});

router.put('/eneida/:eneidaid', function(req, res){
	var data = req.app.get('appDataTest');

	var newRecord = {
		row : req.body.row,
		text : req.body.text
	} 
	var myIndex = data.eneida.map(function(item) { return item.row; }).indexOf(req.params.eneidaid);
	//data.eneida.splice(myIndex,1);
	data.eneida.splice(myIndex, 1, newRecord);
	//data.eneida.push(newRecord)
	console.log(data.eneida);
	//fs.writeFile('./app/data/myjsonfile.json', JSON.stringify(data.eneida), 'utf8');
});

router.delete('/eneida/:eneidaid', function(req, res){
	var data = req.app.get('appDataTest');
	//console.log(data.eneida);
	var myIndex = data.eneida.map(function(item) { return item.row; }).indexOf(req.params.eneidaid);
	 //console.log(req.params.eneidaid);
	console.log(data.eneida.map(function(item) { return item.row; }));
	 //console.log(myIndex);

	if(myIndex === -1) {
	res.statusCode = 404;
	return res.send('Error 404: No quote found');
	}

	data.eneida.splice(myIndex,1);

	console.log(data.eneida)
	fs.writeFile('./app/data/myjsonfile.json', JSON.stringify(data), 'utf8', function(err){
		if(err) throw err;
		res.json(true);
	});

});



 module.exports = router;

/*
router.get('/eneida/:eneidaid', function(req, res){
	var dataFile = req.app.get('appData');
	var eneidaRow = dataFile.eneida[req.params.eneidaid];
	res.send(`
		<h1>${eneidaRow.row}</h1>
		<p>	${eneidaRow.text}</p>
		`)
}) ;




*/