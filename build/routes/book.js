"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../models/book");
var express_1 = require("express");
var db_config_1 = require("../config/db.config");
var mysql_1 = require("mysql");
var bodyParser = require("body-parser");
var bookRouter = express_1.Router();
exports.bookRouter = bookRouter;
var urlParser = bodyParser.json();
bookRouter.get('/', function (req, res) {
    var term = req.query.searchTerm;
    var currentPage = parseInt(req.query.currentPage);
    var pageSize = parseInt(req.query.pageSize);
    var sql = 'select * from book';
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err, books) {
        if (err)
            return res.json({ code: 401, message: 'Get books failed!' });
        var searchResult = term ? books.filter(function (book) { return book.title.indexOf(term) >= 0; }) : books;
        var totalCount = searchResult.length;
        if (!currentPage && !pageSize)
            return res.json({ books: searchResult, totalCount: totalCount });
        var start = (currentPage - 1) * pageSize;
        var end = start + pageSize;
        var finalResult = searchResult.slice(start, end);
        return res.json({ books: finalResult, totalCount: totalCount });
    });
});
bookRouter.get('/detail/:id', function (req, res) {
    var sql = "select * from book where id=" + req.params.id;
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err, books) {
        if (err)
            return res.json({ code: 401, message: 'Get book detail failed!' });
        var book = books[0];
        return res.json(new book_1.BookDetail(book.id, book.title, book.author, book.publisher, book.ISBN, book.borrowerId));
    });
});
bookRouter.post('/add', urlParser, function (req, res) {
    var title = req.body.title;
    var author = req.body.author;
    var publisher = req.body.publisher;
    var ISBN = req.body.ISBN;
    var sql = "insert into book (title, author, publisher, ISBN) values ('" + title + "', '" + publisher + "', '" + publisher + "', '" + ISBN + "')";
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err) {
        if (err) {
            return res.json({ code: 401, message: 'Add book failed!' });
        }
        return res.json({ code: 200, message: 'Add book success!' });
    });
});
bookRouter.post('/save', urlParser, function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var author = req.body.author;
    var publisher = req.body.publisher;
    var ISBN = req.body.ISBN;
    var sql = "update book set title='" + title + "', author='" + author + "', publisher='" + publisher + "', ISBN='" + ISBN + "' where id=" + id;
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err) {
        if (err) {
            return res.json({ code: 401, message: 'Save book failed!' });
        }
        return res.json({ code: 200, message: 'Save book success!' });
    });
});
bookRouter.post('/delete', urlParser, function (req, res) {
    var id = req.body.id;
    var sql = "delete from book where id=" + id;
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err) {
        if (err)
            return res.json({ code: 401, message: 'Delete book failed!' });
        return res.json({ code: 200, message: 'Delete book success!' });
    });
});
bookRouter.post('/return', urlParser, function (req, res) {
    var id = req.body.id;
    var sql = "update book set borrowerId=null where id=" + id;
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err) {
        if (err)
            return res.json({ code: 401, message: 'Return book failed!' });
        return res.json({ code: 200, message: 'Return book success!' });
    });
});
