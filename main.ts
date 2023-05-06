import {ManageTable} from "./manage/manageTable";
import {Staff} from "./staff";
// ==============================variable initialization and declaration==============================
let readlineSync = require('readline-sync')
let init: number
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
let option: number
let test0: boolean
let test1: boolean
let checkRegistration: boolean = false
// ============================================main============================================
while (repeat) {

    console.log("======star======")
    console.log("nhap 1 : log in\nnhap 2 : sign up")
    init = +readlineSync.question("nhap: ")
    switch (init) {
        case 2: {
            do {
                let name = readlineSync.question("nhap name: ")
                let email = readlineSync.question("account: ")
                let check = true
                do {
                    email = readlineSync.question("account: ")
                    for (let j = 0; j < manageAcc.length; j++) {
                        if (manageAcc[j]._account == email) {
                            check = false
                            break
                        } else check = true
                    }
                } while (!check)
                let testEmail = /^[a-z]{1,6}@/
                let password = readlineSync.question("password: ", {hideEchoBack: true})
                let testPass = /^[0-9]{1,6}/
                let confirmPassword = readlineSync.question("Confirm password: ", {hideEchoBack: true})
                test0 = testEmail.test(email);
                test1 = testPass.test(password);
                if (test0 && test1) {
                    if (password == confirmPassword) {
                        let used = new Staff(name, email, password)
                        manageAcc.push(used)
                        console.log("===========Sign Up Success===========")
                        console.log('Duc Anh yeu Giang <3')
                    } else {
                        console.log("===========Password confirmation failed===========")
                    }
                    checkRegistration = true
                } else {
                    console.log("===========Invalid email and account===========")
                }
            } while (!checkRegistration)
        }
            break
        case 1: {
            console.log("===========login===========")
            let account: string
            let password: string
            do {
                account = readlineSync.question("account: ")
                password = readlineSync.question("password: ", {hideEchoBack: true})
                for (i = 0; i < manageAcc.length; i++) {
                    if (account == manageAcc[i].account && password == manageAcc[i].password) {
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

// ============================================function============================================
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
            = +pay = ${table.moneyTable} + ${manageTable.TotalMoneyTable(numTable, 0)} = ${table.moneyTable += manageTable.TotalMoneyTable(numTable, 0)}                                
            ======================================================================
            `)
                console.log("======listTable======");
                console.table(printfTable);
                table.entryTime = null
                table.timeOut = null
                table.serve = 0
                table.moneyTable = 0
                break
            }
            case 3: {
                console.log("nhap 1 : food\nnhap 2 : water\nnhap 3 : poolCue\nnhap 0 : out")
                let oder: number = +readlineSync.question("nhap: ")
                if (table.status !== null) {
                    manageTable.oderServe(oder, option, numTable)
                }
            }
                break
            case 0 :
                break
        }
    } else console.log("===========ko co ban===========")
}




