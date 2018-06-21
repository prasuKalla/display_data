var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var appRoutes = require('./routes/appRoutes');

mongoose.connect('mongodb://localhost/meanDb', { useMongoClient: true });
app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log("backend is running on port :", port);