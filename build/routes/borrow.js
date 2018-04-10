"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("./../models/response");
var express_1 = require("express");
var mock_1 = require("./mock");
var bodyParser = require("body-parser");
var borrowRouter = express_1.Router();
exports.borrowRouter = borrowRouter;
var urlParser = bodyParser.json();
borrowRouter.put('/', urlParser, function (req, res) {
    var userId = req.body.uid;
    var bookId = req.body.bid;
    // TODO: do some database work to verify if this bookId is borrowed
    var random = Math.random();
    if (random === 0) {
        res.json(new response_1.BorrowFail({
            borrower: 'Askey'
        }));
    }
    else {
        var index = mock_1.books.findIndex(function (book) { return book.id === bookId; });
        mock_1.books[index].borrower = 'Veal';
        mock_1.books[index].status = 1;
        res.json(new response_1.BorrowSuccess({
            borrower: 'Veal'
        }));
    }
});
