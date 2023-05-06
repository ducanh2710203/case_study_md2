export interface ItfManageTable {
    listTable
    moneyTableInDay

    creatTable(num: number)

    TurnOnTheTable(num: number)

    TurnOffTheTable(num: number)

    TotalMoneyTable(num: number, serve: number)

    TotalIncome()

    serviceCharge(option, moneyServe, numTable)

    oderServe(oder: number, option: number, numTable)
}