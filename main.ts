import {ManageTable} from "./manage/manageTable";
import {Staff} from "./staff";

let readlineSync = require('readline-sync')
let init: number
let moneyTable: number = 0
let manageTable = new ManageTable()
let numberOfTable = 5
let printfTable = manageTable.creatTable(numberOfTable)
let admin = new Staff("ducanh", "duc@", "123")
let numTable: number
let manageAcc = []
let i = 0
let checkLogin = false
manageAcc.push(admin)
let repeat = true

// ============================================function============================================
function oderServe(oder: number) {
    let table = manageTable.listTable[numTable - 1];

    let messageTable = "===================table" + numTable + "365ER1Aon===================";
    switch (oder) {
        case 1:
            console.log("nhap 1 : goi do\nnhap 2 : tra lai")
            let option = readlineSync.question("nhap")
            switch (option) {
                case 1: {
                    if (table.entryTime !== null) {
                        table.serve = 10
                        moneyTable += table.serve
                        break
                    } else {
                        console.log(messageTable)
                        break
                    }
                }
                case 2: {
                    if (table.entryTime !== null) {
                        table.serve = 10
                        moneyTable -= table.serve
                        break
                    } else {
                        console.log(messageTable)
                        break
                    }
                }

                case 2:
                    table.serve = 11
                    if (table.entryTime !== null) {
                        moneyTable += table.serve
                        break
                    } else {
                        console.log(messageTable)
                        break
                    }
                case 3:
                    table.serve = 30
                    if (table.entryTime !== null) {
                        moneyTable += table.serve
                        break
                    } else {
                        console.log(messageTable)
                        break
                    }
                case 0:
                    break
            }

    }
}

function workWithTheTable() {
    numTable = readlineSync.question("table: ")
    if (numTable <= numberOfTable && numTable > 0) {
        console.log("======work with the table======")
        console.log("nhap 1 : TurnOnTheTable\nnhap 2 : TurnOffTheTable\nnhap 3 : oder\nnhap 0 : out")
        let inp = +readlineSync.question("nhap: ")
        let table = manageTable.listTable[numTable - 1];
        switch (inp) {
            case 1:
                manageTable.TurnOnTheTable(numTable)
                break
            case 2: {
                manageTable.TurnOffTheTable(numTable)
                console.log(`
                            ============totalMoneyTable============`)
                console.log(`
            ==================================Bill================================
            = +table: ${numTable}                                                     
            =                                                                    
            = +time : ${table.getTime()} 
            =                                                                    
            =                                                                    
            = +pay = ${moneyTable} + ${manageTable.TotalMoneyTable(numTable, 0)} = ${moneyTable += manageTable.TotalMoneyTable(numTable, 0)}                                
            ======================================================================
            `)
                break
            }
            case 3: {
                console.log("nhap 1 : food\nnhap 2 : water\nnhap 3 : poolCue\nnhap 0 : out")
                let oder: number = +readlineSync.question("nhap: ")
                if (table.status !== null) {
                    oderServe(oder)
                }
            }
                break
            case 0 :
                break
        }
        console.log("======listTable======")
        console.table(printfTable)
    } else console.log("===========ko co ban===========")
}

// ============================================main============================================
while (repeat) {
    console.log("======star======")
    console.log("nhap 1 : log in\nnhap 2 : sign up")
    init = +readlineSync.question("nhap: ")
    switch (init) {
        case 2: {
            let name = readlineSync.question("nhap name: ")
            let email = readlineSync.question("nhap email: ")
            let testEmail = /^[a-z]{1,6}@/
            let password = readlineSync.question("nhap pass: ")
            let testPass = /^[0-9]{1,6}/
            let confirmPassword = readlineSync.question("Confirm password: ")
            let test0 = testEmail.test(email);
            let test1 = testPass.test(password);
            if (test0 && test1) {
                if (password == confirmPassword) {
                    let used = new Staff(name, email, password)

                    manageAcc.push(used)
                    console.table(manageAcc)
                    console.log("===========Sign Up Success===========")
                } else console.log("===========Password confirmation failed===========")
            } else {
                console.log("===========Invalid email and account===========")
                break
            }
        }
            break;
        case 1: {
            console.log("===========login===========")
            console.table(manageAcc)
            let account: string
            let password: string

            do {
                account = readlineSync.question("account: ")
                password = readlineSync.question("password: ")
                for (i = 0; i < manageAcc.length; i++) {

                    if (account == manageAcc[i].account || password == manageAcc[i].password) {

                        checkLogin = true

                    }
                }
                if (!checkLogin) {
                    console.log("nhap sai rui")
                }
            } while (!checkLogin)
            for (; init != 2;) {
                console.log("===========The billiards bar has " + numberOfTable + " pool tables===========")
                console.table(printfTable)
                console.log("nhap 1 : di vao ban \nnhap 2 : tien cua hom nay \n nhap 0 : log out")
                let menu1: number = +readlineSync.question("nhap : ")
                switch (menu1) {
                    case 0:
                        init = 2
                        repeat = false
                        break
                    case 1: {
                        switch (init) {
                            case 0 :
                                break
                            case 1: {
                                console.log("vao ban bao nhieu: \n")
                                workWithTheTable()
                            }
                        }
                    }
                        break;
                    case 2 :
                        console.log('============Amount received============')
                        console.log("tien da thu: " + manageTable.TotalIncome())
                }
            }
        }
    }
}



