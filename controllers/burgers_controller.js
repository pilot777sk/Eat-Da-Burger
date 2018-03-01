var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

// Routes and set up logic 
router.get('/', function(req,res) {
  burger.all(function(burger_data){
    var hbsObject = {
			burgers: burger_data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);  
  });  
});
router.post("/", function(req, res) {
  burger.create([
   "name", "devoured"
 ], [
   req.body.burger_name, req.body.devoured
 ], function() {
   res.redirect("/");  
  });  
});
router.put("/:id", function(req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});
// link to server.js
module.exports = router;