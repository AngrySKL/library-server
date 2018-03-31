"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BorrowFail = /** @class */ (function () {
    function BorrowFail(data) {
        this.code = 300;
        this.message = 'Borrow fail';
        this.data = data;
    }
    return BorrowFail;
}());
exports.BorrowFail = BorrowFail;
var BorrowSuccess = /** @class */ (function () {
    function BorrowSuccess(data) {
        this.code = 200;
        this.message = 'Borrow success';
        this.data = data;
    }
    return BorrowSuccess;
}());
exports.BorrowSuccess = BorrowSuccess;
var LoginFail = /** @class */ (function () {
    function LoginFail(data) {
        this.code = 401;
        this.message = 'Login failed';
        this.data = data;
    }
    return LoginFail;
}());
exports.LoginFail = LoginFail;
var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(data) {
        this.code = 200;
        this.message = 'Login success';
        this.data = data;
    }
    return LoginSuccess;
}());
exports.LoginSuccess = LoginSuccess;
