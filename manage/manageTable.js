"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageTable = void 0;
var table_1 = require("../table");
var ManageTable = /** @class */ (function () {
    function ManageTable() {
        this.listTable = [];
        this.moneyTableInDay = [];
    }
    ManageTable.prototype.creatTable = function (num) {
        for (var i = 0; i < num; i++) {
            var table1 = new table_1.Table(false, 0);
            this.listTable.push(table1);
        }
        return this.listTable;
    };
    ManageTable.prototype.TurnOnTheTable = function (num) {
        var table = this.listTable[num - 1];
        if (table.entryTime == null) {
            table.status = true;
            table.entryTime = new Date();
            return table.entryTime;
        }
        else
            console.log("===========");
    };
    ManageTable.prototype.TurnOffTheTable = function (num) {
        var table = this.listTable[num - 1];
        if (table.entryTime !== null) {
            table.status = false;
            table.timeOut = new Date;
        }
        else
            console.log("===========table is not turned on to turn off===========");
    };
    ManageTable.prototype.TotalMoneyTable = function (num, serve) {
        var money = this.listTable[num - 1].totalMoneyTable(serve);
        if (money !== undefined)
            this.moneyTableInDay.push(money);
        return this.listTable[num - 1].totalMoneyTable(serve);
    };
    ManageTable.prototype.TotalIncome = function () {
        var sum = 0;
        this.moneyTableInDay.forEach(function (item) {
            sum += item;
        });
        return sum;
    };
    return ManageTable;
}());
exports.ManageTable = ManageTable;
