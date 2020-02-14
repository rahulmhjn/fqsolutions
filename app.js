var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session =require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
var flash = require('connect-flash');
const {check, validationResult} = require('express-validator/check');

var config = require('./config');
const url = config.mongoUrl;
const connect = mongoose.connect(url,{ useNewUrlParser: true });
const conn = mongoose.createConnection(url);

connect.then((db) => {
  console.log("connected to the server and database");
},(err) => {console.log("unable to connect to server and database");});


var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require("express-session")({
  secret: "Rahul's Key",
  resave: false,
  saveUninitialized: false
}));


app.use(flash());




app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  console.log(req.user);
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
