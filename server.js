var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));

// Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
//Handlebars as the view engine
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));
app.set('view engine','handlebars');

//routes to give access to server
var routes = require('./controllers/burgers_controller.js');
app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});