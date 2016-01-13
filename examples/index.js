var express = require('express');
var bodyParser = require('body-parser');
var crudresource = require('./lib');
var models = require('./models');
var app = express();

//Parse the JSON Requests
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var products = crudresource({
    model : models.Product,
    router : express.Router()
});

app.use('/products', products);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});