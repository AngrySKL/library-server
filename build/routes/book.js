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
    var term = req.query.searchTerm;
    var currentPage = parseInt(req.query.currentPage);
    var pageSize = parseInt(req.query.pageSize);
    var searchResult = term ? books.filter(function (book) { return book.title.indexOf(term) >= 0; }) : books;
    var totalCount = searchResult.length;
    var start = (currentPage - 1) * pageSize;
    var end = start + pageSize;
    var finalResult = searchResult.slice(start, end);
    res.json({ books: finalResult, totalCount: totalCount });
});
bookRouter.get('/detail/:id', function (req, res) {
    var book = books.find(function (book) { return book.id == req.params.id; });
    var bookDetail = new book_1.BookDetail(book.id, book.title, 'Veal', "<p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi commodi nobis nisi quas doloribus numquam error dolorum at a.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam magnam quos aut similique, qui quidem excepturi, eligendi voluptatem eveniet commodi porro? Cum pariatur et inventore temporibus cupiditate voluptatibus error, quisquam, corporis mollitia perferendis modi molestias animi necessitatibus! Corrupti, ea animi. Culpa magnam dolorem placeat fugit unde laudantium delectus reprehenderit!\n      </p>\n    <p>\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae harum deserunt aut. Eaque aspernatur maiores fugiat deleniti vero repudiandae neque, ratione, laborum sint dolorum, aut unde quia perferendis molestiae.\n      </p>\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium, quasi, laboriosam, ipsum expedita id rerum quidem saepe nobis architecto obcaecati tenetur nostrum.\n      </p>", book.borrower);
    res.json(bookDetail);
});
