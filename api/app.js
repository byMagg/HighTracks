const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('./app/models/db');
require('dotenv').config();

const apiRouter = require('./app/routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
