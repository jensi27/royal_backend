var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var serviceRouter = require('./routes/service');
var roomRouter = require('./routes/room');
var feedbackRouter = require('./routes/feedback');
var staffRouter = require('./routes/staff');
var bookingRouter = require('./routes/booking');
var galleryRouter = require('./routes/gallery');
var menuRouter = require('./routes/menu');
var rgalleryRouter = require('./routes/rgallery');
var chefRouter = require('./routes/chef');
var contactRouter = require('./routes/contact');
var signinRouter = require('./routes/signin');
var userRouter = require('./routes/user');
var viewroomRouter = require('./routes/viewroom');
var choosersRouter = require('./routes/choosers');


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hotel2")
  .then(() => console.log('Connected!'))
  .catch((err)=>{console.log(err.message)});

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/service',serviceRouter);
app.use('/room',roomRouter);
app.use('/feedback',feedbackRouter);
app.use('/staff',staffRouter);
app.use('/booking',bookingRouter);
app.use('/gallery',galleryRouter);
app.use('/menu',menuRouter);
app.use('/rgallery',rgalleryRouter);
app.use('/chef',chefRouter);
app.use('/contact',contactRouter);
app.use('/signin',signinRouter);
app.use('/user',userRouter);
app.use('/viewroom',viewroomRouter);
app.use('/choosers',choosersRouter);


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
  res.status(err.status || 1000);
  res.render('error');
});

module.exports = app;
