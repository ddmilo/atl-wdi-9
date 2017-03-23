var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");
var projectIdeas = require('../models/project_ideas')
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

module.exports = router;
