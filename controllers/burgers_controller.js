// Import the following
// 1.express
// 2.method-override
// 3.body-parser

//Create a router for the app, and export the router at end of this file.
/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var cat = require('../models/burgers.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/cats', function (req, res) {
	cat.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/cats/create', function (req, res) {
	cat.create(['name', 'devoured'], [req.body.name, req.body.devoured], function () {
		res.redirect('/burgers');
	});
});

router.put('/cats/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	cat.update({ sleepy: req.body.sleepy }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
