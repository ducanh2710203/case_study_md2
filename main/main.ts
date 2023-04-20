import {ManageTable} from "../manage/manageTable";
import {Staff} from "../staff";
    // ============================================declare and create object============================================
declare var require: any
let readlineSync = require('readline-sync')
let init : number
let TotalIncome : any[] = []
let manageTable = new ManageTable()
let numberOfTable = 5
let printfTable = manageTable.creatTable(numberOfTable)
let admin = new Staff("ducanh","duc@","123")
// ============================================function============================================
function workWithTheTable(num:number) {
    let numTable: number = readlineSync.question("table: ")
    if (numTable <= numberOfTable && numTable>0 ) {

        console.log("======work with the table======")
        console.log("nhap 1 : TurnOnTheTable\nnhap 2 : TurnOffTheTable\nnhap 3 : oder\nnhap 0 : out")
        let inp = +readlineSync.question("nhap: ")
        switch (inp) {
            case 1:
                manageTable.TurnOnTheTable(numTable)
                break
            case 2:
                manageTable.TurnOffTheTable(numTable)
                TotalIncome.push(manageTable.TotalMoneyTable(numTable))
                break
            case 3: {
                console.log("nhap 1 : food\nnhap 2 : water\nnhap 3 : poolCue\nhap 0 : out")
                let oder: number = +readlineSync.question("nhap: ")
                switch (oder) {
                    case 1: manageTable.listtable[numTable-1].serve = 10
                        manageTable.listtable[numTable-1].totalMoneyTable(manageTable.listtable[numTable].serve)
                        break
                    case 2: manageTable.listtable[numTable-1].serve = 11
                        manageTable.listtable[numTable-1].totalMoneyTable(manageTable.listtable[numTable].serve)
                        break
                    case 3: manageTable.listtable[numTable-1].serve = 30
                        manageTable.listtable[numTable-1].totalMoneyTable(manageTable.listtable[numTable].serve)
                        break
                    case 0: break
                }
            }
            case 0 : break
        }
        console.log("======listTable======")
        console.table(printfTable)
    }else console.log("===========ko co ban===========")
}




// ============================================main============================================
console.log("======star======")
console.log("nhap 1 : turn on\nnhap2 : turn off")
init  = +readlineSync.question("nhap: ")
console.log("===========login===========")
let account: string
 let password: string
do {

    account = readlineSync.question("account: ")

    password = readlineSync.question("password: ")
    if (account!==admin.account&&password!==admin.password) console.log("sai tk mk rùi nhập lại")
}while (account!==admin.account&&password!==admin.password)



for (  ; init !=2 ;) {

    console.log("===========The restaurant has " + numberOfTable + " pool tables===========")

    console.log("nhap 1 : di vao ban")
    console.log("nhap 0 : out")
    switch (init) {
        case 1: {
            console.log("vao ban bao nhieu: \n")


            workWithTheTable(init)
            console.log(TotalIncome)
            continue
        }
        case 0 : init = 2
    }

}

// let err = new Error("Something bad happened!")

