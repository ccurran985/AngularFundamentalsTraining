var express = require('express');
var path = require('path');
var server = express();
var rootPath = path.normalize(__dirname + '/../');
var port = 8000;
var bodyParser = require('body-parser');
var events = require('./eventsController');

server.use(express.static(rootPath + '/app'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/data/event/:id', events.get);
server.post('/data/event/:id', events.save);

server.listen(port);
console.log('Server running on port ' + port);