var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messagesRouter = require('./routes/messages');
var authorizeRouter = require('./routes/authorize');

var app = express();
const server = require('http').Server(app);
var cors = require('cors');

//allow OPTIONS on all resources
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use('/authorize', authorizeRouter);

module.exports = app;