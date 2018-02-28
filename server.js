var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// Set Handlebars as the view engine
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));
app.set('view engine','handlebars');

//routes to give access to server
var routes = require('./controllers/routes.js');
app.use('/',routes);

var port = 3000;
app.listen(port);