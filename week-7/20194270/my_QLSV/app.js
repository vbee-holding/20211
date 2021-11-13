var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let db = require('./config/db/connect')
let indexRouter = require('./routes/SinhVien');


db.connect();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  // cái này là để xác định bất cứ thứ gì liên quan đến view nó sẽ tìm trong thư mục nào
app.set('view engine', 'pug');  // xác định loại template engine

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/SinhVien', indexRouter);


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
