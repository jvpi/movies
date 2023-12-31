var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let helmet = require('helmet')
var app = express();
let cors = require('cors')
let flash = require('connect-flash')
let session = require('express-session')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'views/admin'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true
}))
app.use(flash())
app.use(helmet())

app.use(
  helmet.frameguard({
    action: "deny",
  })
);
app.use(function (req,res,next) {
  res.locals.message_directorio_creado = req.flash('mensaje_directorio_creado')
  res.locals.message__directorio_ya_existe = req.flash('mensaje_directorio_ya_existe')
  next()
})
//app.use(cors())
// archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));
app.use( indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname,'public/404.html'))
  //next(createError(404));
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
