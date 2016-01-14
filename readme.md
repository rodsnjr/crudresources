# Simple Crud Creation Library #
The routes are defined with expressjs.

# Routes #
The common routes:
* GET / for a query, you can use an json body as a filter, the json format will be restricted to the library you're using.
* POST / for the create
* PUT or PATCH /:id for updating an object
* DELETE /:id for deleting an object

# Required Libs #
* ExpressJS
* Body-parser

# Create a Crud Route #
Creating a simple route for managing products. The default *Model engine* it's [SequelizeJS](http://docs.sequelizejs.com/en/latest/)
```javascript
var crudresource = require('crudresources');

var products = crudresource({
    model : Product,
    router : express.Router()
});

app.use('/products', products);
```
Managing events
```javascript
var products = crudresource({
    model : Product,
    router : express.Router(),
    onCreate : function(product){
        //if the name is empty
        if (!product.name){
            //ends the creation event
            return false;
        }
        //continue the creation event
        return true;
    }
});

app.use('/products', products);
```
Using other *Model engines*
```javascript
var products = crudresource({
    model : Product,
    router : express.Router(),
    engine : 'mongoose'
});
```