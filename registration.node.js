var express = require('express');

var app = express();

//handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

