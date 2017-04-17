const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/quoting_dojo");

let QuoteSchema = new mongoose.Schema({
	quote: String,
	name: String,
	likes: Number
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const routes = require('./routes/routes.js')(app);

app.listen(8000);