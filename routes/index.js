var express = require('express');
var router = express.Router();
var Event = require("../models/event");

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
      res.render("index");
});

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.render('stream');
}

module.exports = router;
