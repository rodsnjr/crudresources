var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connection to database estabilished');
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
   name : String,
   value : Number 
});

mongoose.model('Product', productSchema);