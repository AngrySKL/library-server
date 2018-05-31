"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = require("mysql");
var bodyParser = require("body-parser");
var db_config_1 = require("../config/db.config");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
var urlParser = bodyParser.json();
loginRouter.post('/', urlParser, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var sql = "select * from user where name=" + username + " and password=" + password;
    mysql_1.createConnection(db_config_1.dbConfig).query(sql, function (err, users) {
        if (err) {
            return res.json({ code: 300, message: 'Login failed!' });
        }
        var user = users[0];
        return res.json({ code: 200, message: 'Login success!', data: { id: user.id, nickname: 'Veal' } });
    });
});
