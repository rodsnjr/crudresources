
/**
 * Create the resource for Mongoose
 * @param {args} args The desired arguments, like the router, model, etc
 * @return {Router} The express router created with common crud routes  
 */
module.exports = (function(args){
    
    var model = args.model; 
    var router = args.router;
    
    var update = function(req, res){
     
        model.findOneAndUpdate({ _id : req.params.id }, req.body, {}, 
        function(err, item){
            
            if (err)
			 return res.send(err);
            
            return res.json(item); 
        });
        
    };
    
    router.post('/', function(req, res){
       model.create(req.body, function(err, item){
           res.json(item);
       });
    });
    
    router.get('/', function(req,res){
       model.find(req.body, function(err, items){
           res.json(items);
       });
    });
    
    router.put('/:id', update);
    
    router.patch('/:id', update);
    
    router.delete('/:id', function(req,res){
        model.remove({ _id : req.params.id }, function(err){
		  if (err)
            res.send(err);
            
          res.send('removed ' + req.params.id);
        });
    });
    
    return router;
});