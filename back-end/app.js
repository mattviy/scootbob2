var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
bodyParser = require('body-parser');

var cors = require("cors");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/scooter',  { useNewUrlParser: true }, (err) => {
err ? console.log("Not connected to the database, cause: " + err) : console.log("Succesfully connected to MongoDB")
})

app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var confirmationRouter = require('./routes/confirmation');
var createRidesRouter = require('./routes/create-rides');
var logoutRouter = require('./routes/logout');
var cookieRouter = require('./routes/cookies')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("secret"));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);
app.use('/confirmation', confirmationRouter);
app.use('/create-rides', createRidesRouter);
app.use('/logout', logoutRouter);
app.use('/cookies', cookieRouter)

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
});

module.exports = app;
