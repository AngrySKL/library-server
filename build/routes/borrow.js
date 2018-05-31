"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = require("mysql");
var bodyParser = require("body-parser");
var db_config_1 = require("../config/db.config");
var borrowRouter = express_1.Router();
exports.borrowRouter = borrowRouter;
var urlParser = bodyParser.json();
borrowRouter.post('/', urlParser, function (req, res) {
    var userId = req.body.uid;
    var bookId = req.body.bid;
    var tempBorrowerId = userId ? userId : 6;
    var sql = "update book set borrowerId=" + tempBorrowerId + " where id=" + bookId;
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err) {
        if (err) {
            return res.json({ code: 300, message: 'Borrow failed!' });
        }
        return res.json({ code: 200, message: 'Borrow success!' });
    });
});
