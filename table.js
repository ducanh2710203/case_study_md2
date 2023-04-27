"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var Serve;
(function (Serve) {
    Serve[Serve["none"] = 0] = "none";
    Serve[Serve["food"] = 10] = "food";
    Serve[Serve["water"] = 11] = "water";
    Serve[Serve["poolCue"] = 30] = "poolCue";
})(Serve || (Serve = {}));
var Table = /** @class */ (function () {
    function Table(status, serve) {
        this.status = false;
        this.serve = Serve.none;
        this.entryTime = null;
        this.timeOut = null;
        this.status = status;
    }
    Table.prototype.totalMoneyTable = function (nu) {
        // console.log('GET TIME------ ',this.getTime())
        if (this.entryTime && this.timeOut && this.getTime() !== undefined) {
            return (this.timeOut.getMinutes() - this.entryTime.getMinutes()) * 4500 + nu;
        }
    };
    Table.prototype.getTime = function () {
        var timeOut = this.timeOut.getMinutes();
        var entryTime = this.entryTime.getMinutes();
        if (timeOut !== null && entryTime !== null) {
            if (timeOut && entryTime) {
                return timeOut - entryTime;
            }
        }
    };
    return Table;
}());
exports.Table = Table;
