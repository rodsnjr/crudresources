
/**
 * Create the resource for Sequelize
 * @param {args} args The desired arguments, like the router, model, etc
 * @return {Router} The express router created with common crud routes  
 */
module.exports = (function(args){
        
        var model = args.model;
        
        var router = args.router;
    
         router.get('/', function(req, res){
             if (args.onQuery(req.body)){
                model.findAll(req.body).then(function(all){
                    res.json(all);
                });
             }
         });
         
         router.get('/:id', function(req, res){
             if (args.onFind(req.body)){
                model.findById(req.params.id).then(function(one){
                    res.json(one);
                });    
             }             
         });
         
         var update = function(req, res){
             if (args.onUpdate(req.body)){
                model.findById(req.params.id).then(function(one){
                    one.update(req.body).then(function(updated){
                        res.json(updated);
                    });
                });
             }
         };
                 
         router.patch('/:id', update);
         
         router.put('/:id', update);
         
         router.delete('/:id', function(req, res){
             if (args.onDelete(req.body)){
             
                model.findById(req.params.id).then(function(one){
                one.destroy()
                    .then(function(destroyed){
                        res.json(destroyed);
                    });
                });
                
             }
              
         });
         
         router.post('/', function(req, res){
            if (args.onCreate(req.body)){
                model.build(req.body).save().then(function(product){
                    res.json(product);
                }).catch(function(error){
                    res.send(error);
                });    
            }
            
         
         });
         
         return router;
});