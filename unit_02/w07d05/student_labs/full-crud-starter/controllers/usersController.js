var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render('users/index', {
        users: users
      });
    });
});

// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('users/show', {
      user: user
    });
  });
});

// USER EDIT ROUTE
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('users/edit', {
      user: user
    });
  });
});

// USER CREATE ROUTE
router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.send(user);
  });
});

// USER UPDATE ROUTE
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.render('users/show.hbs', {
      user: user
    });
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log('User deleted!');
    res.send("User deleted");
  });
});

// ITEM INDEX ROUTE
router.get('/:id/items', function(req, res){
  User.findById(req.params.id)
    .exec(function(err, user){
      if (err) { console.log(err); }
      console.log(user.id)
      console.log(user.items)
      res.render('items/index.hbs', {
        items: user.items,
        user: user
      });
    });
});

// ADD A NEW ITEM
router.post('/:id/items', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err){
      if (err) console.log(err);
      res.send(user);
    });
  });
});

// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item){
    if (err) console.log(err);
    res.send(item + " Item deleted");
  });
});


module.exports = router;
