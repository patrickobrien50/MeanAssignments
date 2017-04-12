const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + "/client/static"));
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");

require('./server/config/mongoose.js');

const routes = require('./server/config/routes.js')(app);

app.listen(8000);