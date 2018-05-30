"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, title, borrower, status) {
        this.id = id;
        this.title = title;
        this.borrower = borrower;
        this.status = status;
    }
    return Book;
}());
exports.Book = Book;
var BookDetail = /** @class */ (function () {
    function BookDetail(id, title, author, publisher, ISBN, borrower) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.ISBN = ISBN;
        this.borrower = borrower;
    }
    return BookDetail;
}());
exports.BookDetail = BookDetail;
