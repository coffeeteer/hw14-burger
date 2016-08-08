// var express = require('express');
// var bodyParser = require('body-parser');
// var handlebars = require('express-handlebars');
// var connect = require('connect');
// var methodOverride = require('method-override');

// var app = express();

// app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

// app.use(methodOverride('X-HTTP-Method-Override'));

// app.engine('handlebars', handlebars({  //sets the handles page 'main' to be the skeleton of every webpage
// 	defaultLayout: 'main'
// }));

// app.set('view engine', 'handlebars'); // sets the view engine

// app.get('/', function(req, res) { //main route
// 	res.render('index'); // links to index.handlebars page
// });

// //form page
// // app.get('/', function(req, res) {
// // 	res.render('new');
// // });

// //view posts
// // app.get('/posts/:id', function(req, res) {
// // 	res.render('post');
// // });

// // app.get('creates route', function(req, res) {
// // 	res.render('links to page');
// // });

// var port = process.env.PORT || 3000; //uses Heroku's specified port OR it uses the 3000 local port
// app.listen(port, function() {
// 	console.log('connected to PORT ' + port); //in console lets user know of what port they're connected to
// });
//**************************
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public')); //process.cwd() method returns the current working directory 

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);
console.log('Listening to PORT ' + port);