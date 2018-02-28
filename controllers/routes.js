var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req,res) {
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index');  
  })  
})
router.post('/create', function(req,res) {
  burger.all("burgers", function(burger_data){
    console.log(burger_data);
    res.render('index');  
  })  
})
router.put('/burgers/update',function (req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});
// link to server.js
module.exports = router;