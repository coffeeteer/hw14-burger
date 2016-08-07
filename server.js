var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', handlebars({  //sets the handles page 'main' to be the skeleton of every webpage
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars'); // sets the view engine

app.get('/', function(req, res) { //main route
	res.render('index'); // links to index.handlebars page
});

//form page
// app.get('/', function(req, res) {
// 	res.render('new');
// });

//view posts
// app.get('/posts/:id', function(req, res) {
// 	res.render('post');
// });

// app.get('creates route', function(req, res) {
// 	res.render('links to page');
// });

var port = process.env.PORT || 3000; //uses Heroku's specified port OR it uses the 3000 local port
app.listen(port, function() {
	console.log('connected to PORT ' + port); //in console lets user know of what port they're connected to
});