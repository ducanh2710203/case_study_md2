"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageTable = void 0;
var table_1 = require("../table");
var readlineSync = require('readline-sync');
var oder;
var ManageTable = /** @class */ (function () {
    function ManageTable() {
        this.listTable = [];
        this.moneyTableInDay = [];
        this.listOder = [];
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
        if (money !== undefined) {
            this.moneyTableInDay.push(money);
        }
        return this.listTable[num - 1].totalMoneyTable(serve);
    };
    ManageTable.prototype.TotalIncome = function () {
        var sum = 0;
        this.moneyTableInDay.forEach(function (item) {
            console.log("sum" + sum);
            console.log("item" + item);
            sum += item;
        });
        return sum;
    };
    ManageTable.prototype.serviceCharge = function (option, moneyServe, numTable) {
        console.log("nhap 1 : goi do\nnhap 2 : tra lai\nnhap 0 : out");
        option = +readlineSync.question("nhap ");
        var table = this.listTable[numTable - 1];
        switch (option) {
            case 1: {
                if (table.entryTime !== null) {
                    table.serve = moneyServe;
                    this.listOder.push(table.serve);
                    table.moneyTable += table.serve;
                    table.serve = table.moneyTable;
                    break;
                }
                else {
                    console.log("table " + numTable + " is not turned on");
                    break;
                }
            }
            case 2: {
                if (this.listOder.indexOf(moneyServe) !== -1) {
                    this.listOder.splice(this.listOder.indexOf(moneyServe), 1);
                    table.serve = moneyServe;
                    table.moneyTable -= table.serve;
                    table.serve = table.moneyTable;
                    break;
                }
                else {
                    console.log("Your table does not order this item");
                    break;
                }
            }
            case 0:
                break;
        }
    };
    ManageTable.prototype.oderServe = function (oder, option, numTable) {
        switch (oder) {
            case 1:
                this.serviceCharge(option, 10, numTable);
                break;
            case 2:
                this.serviceCharge(option, 11, numTable);
                break;
            case 3:
                this.serviceCharge(option, 30, numTable);
                break;
            case 0:
                break;
        }
    };
    return ManageTable;
}());
exports.ManageTable = ManageTable;
