var express = require('express');
var bodyParser = require('body-parser');
var crudresource = require('../index');
var app = express();

//Parse the JSON Requests
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/* Serving as Sequelize 
var models = require('./models');
var products = crudresource({
    model : models.Product,
    router : express.Router()
});
*/

/* Serving as MongooseJS 
var models = require('./mongoose');
var mongoose = require('mongoose');
var products = crudresource({
   model : mongoose.model('Product'),
   router : express.Router(),
   engine : 'mongoose' 
});
*/

//app.use('/products', products);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});