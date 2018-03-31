"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var book_1 = require("./routes/book");
var login_1 = require("./routes/login");
var borrow_1 = require("./routes/borrow");
var app = express();
app.use('/api/books', book_1.bookRouter);
app.use('/api/login', login_1.loginRouter);
app.use('/api/borrow', borrow_1.borrowRouter);
var server = app.listen(8000, 'localhost', function () {
    console.log('Server Started: http://localhost:8000');
});
