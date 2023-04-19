import {Table} from "../table";
export class ManageTable {
    listtable :Table[] = []
    constructor() {

    }
    creatTable(num:number){
        for (let i = 0; i < num; i++) {
            let  table1 = new Table(false,0)
            this.listtable.push(table1)
        }
        console.log("số lượng bàn"+num)
        return this.listtable
    }
    TurnOnTheTable(num : number){
        this.listtable[num-1].status = true
        this.listtable [num-1].entryTime = new Date()
        return this.listtable [num-1].entryTime
    }
    TurnOffTheTable(num : number){
        if (this.listtable [num-1].entryTime!==null){
            this.listtable[num-1].status = false
            this.listtable [num-1].timeOut = new Date
            console.log("============totalMoneyTable============")
            console.log("the money have to pay: " + this.totalMoneyTable(num) + "k1")
        }else return "table is not turned on to turn off"
    }
    totalMoneyTable(num:number){
        return  this.listtable[num-1].totalMoneyTable()
    }

}
