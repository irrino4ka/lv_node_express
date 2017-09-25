var express = require('express');
var router = express.Router();
var apiData = require('../data/data_api.json');

router.get('/api', function(req, res){
	res.json(apiData.eneida);
});

router.get('/api/:eneidaid', function(req, res){
	var index = req.params.eneidaid;

	if (index == 'all'){
		res.json(apiData.eneida);
	}			
		else 
			{ res.json(apiData.eneida[index].text);}

}) 


/*
 if user.role == 'admin'
     p #{user.name} is an admin
    else
     p= user.name

router.get('/api/:eneidaid', function(req, res){

	apiData.eneida.forEach(function(item){
		if (item.row == req.params.eneidaid){
			res.json(item.text);
		}
	});
}) 
*/

// router.put('/api/:eneidaid', function(req, res){

// 	var json = req.body; // "Еней був парубок моторний<br> І хлопець хоть куди козак,"

// 	apiData.eneida.forEach(function(item){
// 		if (item.row == req.params.eneidaid){
// 			item.text = json;
// 		}
// 	});

// 	// saving the appData.json
// }) 

// router.delete('/api/:eneidaid', function(req, res){

// 	apiData.eneida.forEach(function(item, i){
// 		if (item.row == req.params.eneidaid){
// 			delete apiData[i];
// 		}
// 	});

// 	

// 	// saving the appData.json
// }) 



module.exports = router;