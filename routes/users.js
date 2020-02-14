var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

var User = require('../models/user');
var async = require("async");
var crypto = require("crypto");
var nodemailer = require("nodemailer");
var mongoose =require("mongoose");


var Event = require("../models/event");


const {check, validationResult} = require('express-validator/check');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/login',
  passport.authenticate('local',{failureRedirect:'/',failureFlash: 'Invalid username or password'}),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log("You are now logged in")
    req.flash('success','You are now logged in');
    res.redirect('/');
  });

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

 passport.use(new LocalStrategy(function(username, password, done){
    User.getUserByUsername(username,function(err,user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }

      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid Password'});
        }
      });
    });
  }));

router.post('/register' ,function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  

  // Form Validator
  check('name','Name field is required').notEmpty();
  check('email','Email field is required').notEmpty();
  check('email','Email is not valid').isEmail();
  check('username','Username field is required').notEmpty();
  check('password','Password field is required').notEmpty();
  check('password2','Passwords do not match').equals(req.body.password);

  // Check errors
  var errors = validationResult(req);
  console.log(req.body);

  if(!errors.isEmpty()){
    res.render('stream', {
      title: errors
    });
  } else{
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });

    User.createUser(newUser,function(err,user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success','You are now registered and can now login');

    res.location('/');
    res.redirect('/');
  }
});

router.get("/events",(req,res) => {
  Event.find({},(err,event) => {
      if(err){
          res.send(err);
      }
      else{
          res.render("event",{event:event});
      }
  })
})

router.get("/admin/events",(req,res) => {
  Event.find({},(err,event) => {
      if(err){
          res.send(err);
      }
      else{
          // res.send(notification);
          res.render("addevent",{event:event});
      }
  })
});

router.post("/event/add",(req,res) => {
  Event.create({title:req.body.title,date:req.body.date,time: req.body.time,description:req.body.description,venue:req.body.venue},(err,event) => {
      if(err){
          res.send(err);
      }
      else{
          res.redirect("/users/admin/events");
      }
  })
});

router.get('/event/edit/:evtid',(req,res)=> {
  Event.findOne({_id:mongoose.Types.ObjectId(req.params.evtid)},(err,fnot) => {
      if(err) {
        console.log("rahul");
          res.send(err);
      }
      else{
          Event.find({_id:{$ne:mongoose.Types.ObjectId(req.params.evtid)}},(err,event)=> {
              if(err){
                console.log("mahajan");
                  res.send(err);
              }
              else{
                  res.render('edit',{notf:fnot,event:event})
              }
          })
          
      }
  })
})
// route to edit event
router.post('/event/edit/:evtid',(req,res) => {
  Event.findOne({_id:mongoose.Types.ObjectId(req.params.evtid)},(err,fnoti) => {
      if(err) {
          res.send(err);
      }
      else{
          fnoti.title = req.body.title;
          fnoti.date = req.body.date;
          fnoti.time = req.body.time;
          fnoti.description = req.body.description;
          fnoti.venue = req.body.venue;
          fnoti.save().then(() => {
              res.redirect('/users/admin/events');
          });
          
      }
  })
})

router.post("/event/delete/:evtid",(req,res)=>{
  Event.deleteOne({_id:mongoose.Types.ObjectId(req.params.evtid)},(err)=>{
      if(err){
          res.send(err);

      }else {
          res.redirect("/users/admin/events");
      }
  })
});



// --------------------------------------
// Routes For Password Reset
// --------------------------------------
// @route to post forgot password
router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'rahul.mahajan676@gmail.com',
          pass: process.env.GMAILPW
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'rahul.mahajan676@gmail.com',
        subject: 'File Database Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
      //   console.log('mail sent');
        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

// GET route to render reset page
router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/');
    }
    res.render('admin/reset', {token: req.params.token});
  });
});
//   @post route to reset password
router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }
        if(req.body.password === req.body.confirm) {
          user.setPassword(req.body.password, function(err) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function(err) {
              req.logIn(user, function(err) {
                done(err, user);
              });
            });
          })
        } else {
            req.flash("error", "Passwords do not match.");
            return res.redirect('back');
        }
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'rahul.mahajan676@gmail.com',
          pass: process.env.GMAILPW
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'rahul.mahajan676@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/');
  });
});


router.get('/logout',function(req, res){
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/');
})

module.exports = router;
