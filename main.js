"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manageTable_1 = require("./manage/manageTable");
var staff_1 = require("./staff");
var readlineSync = require('readline-sync');
var init;
var moneyTable = 0;
var manageTable = new manageTable_1.ManageTable();
var numberOfTable = 5;
var printfTable = manageTable.creatTable(numberOfTable);
var admin = new staff_1.Staff("ducanh", "duc@", "123");
var numTable;
var manageAcc = [];
var i = 0;
var checkLogin = false;
manageAcc.push(admin);
var repeat = true;
// ============================================function============================================
function oderServe(oder) {
    var table = manageTable.listTable[numTable - 1];
    var moneyServe = manageTable.TotalMoneyTable(numTable, table.serve);
    var messageTable = "===================table" + numTable + " is not turned on===================";
    switch (oder) {
        case 1:
            table.serve = 10;
            if (table.entryTime !== null) {
                moneyTable += table.serve;
                break;
            }
            else {
                console.log(messageTable);
                break;
            }
        case 2:
            table.serve = 11;
            if (table.entryTime !== null) {
                moneyTable += table.serve;
                break;
            }
            else {
                console.log(messageTable);
                break;
            }
        case 3:
            table.serve = 30;
            if (table.entryTime !== null) {
                moneyTable += table.serve;
                break;
            }
            else {
                console.log(messageTable);
                break;
            }
        case 0:
            break;
    }
}
function workWithTheTable() {
    numTable = readlineSync.question("table: ");
    if (numTable <= numberOfTable && numTable > 0) {
        console.log("======work with the table======");
        console.log("nhap 1 : TurnOnTheTable\nnhap 2 : TurnOffTheTable\nnhap 3 : oder\nnhap 0 : out");
        var inp = +readlineSync.question("nhap: ");
        var table = manageTable.listTable[numTable - 1];
        switch (inp) {
            case 1:
                manageTable.TurnOnTheTable(numTable);
                break;
            case 2: {
                manageTable.TurnOffTheTable(numTable);
                console.log("\n                            ============totalMoneyTable============");
                console.log("\n            ==================================Bill================================\n            = +table: ".concat(numTable, "                                                     \n            =                                                                    \n            = +time : ").concat(table.getTime(), " \n            =                                                                    \n            =                                                                    \n            = +pay = ").concat(moneyTable, " + ").concat(manageTable.TotalMoneyTable(numTable, 0), " = ").concat(moneyTable += manageTable.TotalMoneyTable(numTable, 0), "                                \n            ======================================================================\n            "));
                break;
            }
            case 3:
                {
                    console.log("nhap 1 : food\nnhap 2 : water\nnhap 3 : poolCue\nnhap 0 : out");
                    var oder = +readlineSync.question("nhap: ");
                    if (table.status !== null) {
                        oderServe(oder);
                    }
                }
                break;
            case 0:
                break;
        }
        console.log("======listTable======");
        console.table(printfTable);
    }
    else
        console.log("===========ko co ban===========");
}
// ============================================main============================================
while (repeat) {
    console.log("======star======");
    console.log("nhap 1 : log in\nnhap 2 : sign up");
    init = +readlineSync.question("nhap: ");
    switch (init) {
        case 2:
            {
                var name_1 = readlineSync.question("nhap name: ");
                var email = readlineSync.question("nhap email: ");
                var testEmail = /^[a-z]{1,6}@/;
                var password = readlineSync.question("nhap pass: ");
                var testPass = /^[0-9]{1,6}/;
                var confirmPassword = readlineSync.question("Confirm password: ");
                var test0 = testEmail.test(email);
                var test1 = testPass.test(password);
                if (test0 && test1) {
                    if (password == confirmPassword) {
                        var used = new staff_1.Staff(name_1, email, password);
                        manageAcc.push(used);
                        console.table(manageAcc);
                        console.log("===========Sign Up Success===========");
                    }
                    else
                        console.log("===========Password confirmation failed===========");
                }
                else {
                    console.log("===========Invalid email and account===========");
                    break;
                }
            }
            break;
        case 1: {
            console.log("===========login===========");
            console.table(manageAcc);
            var account = void 0;
            var password = void 0;
            do {
                account = readlineSync.question("account: ");
                password = readlineSync.question("password: ");
                for (i = 0; i < manageAcc.length; i++) {
                    if (account == manageAcc[i].account || password == manageAcc[i].password) {
                        checkLogin = true;
                    }
                }
                if (!checkLogin) {
                    console.log("nhap sai rui");
                }
            } while (!checkLogin);
            for (; init != 2;) {
                console.log("===========The billiards bar has " + numberOfTable + " pool tables===========");
                console.table(printfTable);
                console.log("nhap 1 : di vao ban \nnhap 2 : tien cua hom nay \n nhap 0 : log out");
                var menu1 = +readlineSync.question("nhap : ");
                switch (menu1) {
                    case 0:
                        init = 2;
                        repeat = false;
                        break;
                    case 1:
                        {
                            switch (init) {
                                case 0:
                                    break;
                                case 1: {
                                    console.log("vao ban bao nhieu: \n");
                                    workWithTheTable();
                                }
                            }
                        }
                        break;
                    case 2:
                        console.log('============Amount received============');
                        console.log("tien da thu: " + manageTable.TotalIncome());
                }
            }
        }
    }
}
