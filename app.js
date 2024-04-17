var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username })
    .then(function (user){
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch(function(err){
      return done(err)
    })
  })
)
// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());



require('dotenv').config();
const MONGO_CON = 'mongodb+srv://yashu:yashu2702@cluster0.pgymqwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connectionString = MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ornamentsRouter = require('./routes/ornaments');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var ornaments = require("./models/ornaments");
var resourceRouter = require("./routes/resources");




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ornaments', ornamentsRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler

// We can seed the collection if needed on server start
async function recreateDB(){
    // Delete everything
    await ornaments.deleteMany();
    let instance1 = new
    ornaments({ material: 'Glass', style: 'Modern', price: 19.99});
    instance1.save().then(doc=>{
    console.log("First object saved")}
    ).catch(err=>{
    console.error(err)
    });
    let instance2 = new
    ornaments({ material: 'Wood', style: 'Traditional', price: 24.95});
    instance2.save().then(doc=>{
    console.log("Second object saved")}
    ).catch(err=>{
    console.error(err)
    });
    let instance3 = new
    ornaments({ material: 'Metal', style: 'Vintage', price: 32.50});
    instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)
    });
}

let reseed = true;
if (reseed) {recreateDB();}



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
