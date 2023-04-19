import {ManageTable} from "./manage/manageTable";

declare var require: any
let readlineSync = require('readline-sync')

let manageTable = new ManageTable()
let numberOfTable = 5
let printfTable = manageTable.creatTable(numberOfTable)
function kiemtra(num:number) {
    let numTable: number = readlineSync.question("table: ")
    if (numTable <= numberOfTable ) {

        console.log("======work with the table======")
        let inp = +readlineSync.question("nhap 1 : TurnOnTheTable\nnhap 2 : TurnOffTheTable\n")
        switch (inp) {
            case 1:
                manageTable.TurnOnTheTable(numTable)
                break
            case 2:
                manageTable.TurnOffTheTable(numTable)

                break
            case 3: num=2
        }
        console.log("======listTable======")
        console.table(printfTable)
    }else console.log("ko co ban")
}

console.log("======star======")
console.log("nhap 1 : turn on\nnhap2 : turn off\n")
let init : number = +readlineSync.question("nhap")
for (  ; init !=2 ;) {

    console.log("The restaurant has " + numberOfTable + " pool tables")
    console.log("vao ban bao nhieu: \n")


    kiemtra(init)
    console.log(init)
}

