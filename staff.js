"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, _account, _password) {
        this._name = name;
        this._account = _account;
        this._password = _password;
    }
    Object.defineProperty(Staff.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}());
exports.Staff = Staff;
