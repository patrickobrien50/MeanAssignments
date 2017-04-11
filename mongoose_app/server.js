var express = require("express");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var path = require("path");

app.use(express.static(__dirname, '/static'));

app.set('views', path.join(__dirname, '/views'))
