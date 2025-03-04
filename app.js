// Installations
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bicicletasAPIRouter = require('./routes/api/v1/bicicletas');

var app = express();

// Configurations
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

const options = require('./swagger-options');
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(cors({
  origin: ['http://localhost:5173', 'https://fabio000001.github.io/PRPG'], // Permitir solo estos origenes
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
}));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/bicicletas', bicicletasAPIRouter);

// Error handlers
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Server bootup or server export
module.exports = app;
