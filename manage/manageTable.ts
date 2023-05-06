import {Table} from "../table";
import {ItfManageTable} from "../interface/itf-ManageTable";

let readlineSync = require('readline-sync')
let oder: number


export class ManageTable implements ItfManageTable {
    listTable: Table[] = []
    moneyTableInDay: number[] = []

    listOder = []

    constructor() {
    }

    creatTable(num: number) {
        for (let i = 0; i < num; i++) {
            let table1 = new Table(false, 0)
            this.listTable.push(table1)
        }
        return this.listTable
    }

    TurnOnTheTable(num: number) {
        let table = this.listTable[num - 1];
        if (table.entryTime == null) {
            table.status = true
            table.entryTime = new Date()
            return table.entryTime
        } else console.log("===========")
    }

    TurnOffTheTable(num: number) {
        let table = this.listTable [num - 1];
        if (table.entryTime !== null) {
            table.status = false
            table.timeOut = new Date

        } else console.log("===========table is not turned on to turn off===========")
    }

    TotalMoneyTable(num: number, serve: number) {
        let money: number | undefined = this.listTable[num - 1].totalMoneyTable(serve)
        if (money !== undefined) {
            this.moneyTableInDay.push(money)

        }

        return this.listTable[num - 1].totalMoneyTable(serve)
    }

    TotalIncome() {
        let sum: number = 0
        this.moneyTableInDay.forEach((item) => {
            console.log("sum" + sum)
            console.log("item" + item)
            sum += item
        })
        return sum
    }

    serviceCharge(option, moneyServe, numTable) {
        console.log("nhap 1 : goi do\nnhap 2 : tra lai\nnhap 0 : out")
        option = +readlineSync.question("nhap ")
        let table = this.listTable[numTable - 1];
        switch (option) {
            case 1: {
                if (table.entryTime !== null) {
                    table.serve = moneyServe
                    this.listOder.push(table.serve)
                    table.moneyTable += table.serve
                    table.serve = table.moneyTable
                    break
                } else {
                    console.log("table " + numTable + " is not turned on")
                    break
                }
            }
            case 2: {
                if (this.listOder.indexOf(moneyServe) !== -1) {
                    this.listOder.splice(this.listOder.indexOf(moneyServe), 1)
                    table.serve = moneyServe
                    table.moneyTable -= table.serve
                    table.serve = table.moneyTable
                    break
                } else {
                    console.log("Your table does not order this item")
                    break
                }
            }
            case 0 :
                break
        }
    }

    oderServe(oder: number, option: number, numTable) {


        switch (oder) {
            case 1:
                this.serviceCharge(option, 10, numTable)
                break

            case 2:
                this.serviceCharge(option, 11, numTable)
                break
            case 3:
                this.serviceCharge(option, 30, numTable)
                break
            case 0:
                break
        }

    }

}
