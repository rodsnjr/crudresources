var sequelizeRouter = require('./libs/sequelize');
var mongooseRouter = require('./libs/mongoose');
/**
* Swap empty undefined events with a default action
* @param {args} args The arguments object
*/
function eventSwap(args){
    if (typeof args.onQuery === "undefined")
        args.onQuery = function(){ return true; };
    if (typeof args.onFind === 'undefined')
        args.onFind = function(){ return true; };
    if (typeof args.onUpdate === 'undefined')
        args.onUpdate = function(){ return true; };
    if (typeof args.onDelete === 'undefined')
        args.onDelete = function(){ return true; };
    if (typeof args.onCreate === 'undefined')
        args.onCreate = function(){ return true; };
}
/**
 * CrudResource module
 * @module CrudResource
 * @param {args} args The object arguments see the docs for extra tips
 */
module.exports = (function(args){
    //Check if there's undefined common events, 
    //and swap with default action ones.
    eventSwap(args);
               
    if (args.router) {
        //Currently Accepting sequelize as ORM
        if (args.engine == 'sequelize') {
            return sequelizeRouter(args);
        }else if (args.engine == 'mongoose'){
            return mongooseRouter(args);
        }
        //Else for default a value
        else {
            return sequelizeRouter(args);
        }
    }else{
        console.log('A express router must be defined');
    }
});