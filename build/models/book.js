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
