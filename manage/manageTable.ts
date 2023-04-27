import {Table} from "../table";

export class ManageTable {
    listTable: Table[] = []
    moneyTableInDay: number[] = []

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
        if (money !== undefined)
            this.moneyTableInDay.push(money)
        return this.listTable[num - 1].totalMoneyTable(serve)
    }

    TotalIncome() {
        let sum: number = 0
        this.moneyTableInDay.forEach((item) => {
            sum += item
        })
        return sum
    }
}
