var express = require('express');
var app = express();
var hbs = require('express-handlebars');
var server = require('http').createServer(app);

app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', ('views'));
app.use(express.static('public'));

require('./app/routes.js')(app);

app.set('port', process.env.PORT || 8080);

server.listen(app.get("port"));