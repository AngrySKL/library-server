"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../models/book");
var express_1 = require("express");
var bookRouter = express_1.Router();
exports.bookRouter = bookRouter;
var books = [
    new book_1.Book(1, '麻烦关下灯', '', 0),
    new book_1.Book(2, '我要和宋仲基睡觉了', '', 0),
    new book_1.Book(3, '请不要伤害', '李胜基', 1),
    new book_1.Book(4, '我和宋仲基的孩子', '', 0),
    new book_1.Book(5, '我对象挺好的', '林志玲', 1),
    new book_1.Book(6, '象对我也挺好的', '', 0),
    new book_1.Book(7, '郁金香的汉子们', '吴亦凡', 1),
    new book_1.Book(8, '麻烦关下灯', '', 0),
    new book_1.Book(9, '我要和宋仲基睡觉了', '', 0),
    new book_1.Book(10, '请不要伤害', '李胜基', 1),
    new book_1.Book(11, '我和宋仲基的孩子', '', 0),
    new book_1.Book(12, '我对象挺好的', '林志玲', 1),
    new book_1.Book(13, '象对我也挺好的', '', 0),
    new book_1.Book(14, '郁金香的汉子们', '吴亦凡', 1),
];
bookRouter.get('/', function (req, res) {
    res.json(books);
});
bookRouter.get('/book/:id', function (req, res) {
    res.json(books.find(function (book) { return book.id == req.params.id; }));
});
