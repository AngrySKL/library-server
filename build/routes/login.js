"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var response_1 = require("../models/response");
var bodyParser = require("body-parser");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
var urlParser = bodyParser.json();
loginRouter.post('/', urlParser, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("username = " + username);
    console.log("password = " + password);
    if (username === 'Veal' && password === "Elekta") {
        res.json(new response_1.LoginSuccess({ nickname: 'Veal', id: 32 }));
    }
    else {
        res.json(new response_1.LoginFail());
    }
});
