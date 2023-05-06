import internal = require("stream");
import {ItfTable} from "./interface/itf-table";

enum Serve {
    none = 0,
    food = 10,
    water,
    poolCue = 30,
}

export class Table implements ItfTable {
    status: boolean = false
    serve: Serve = Serve.none
    entryTime: Date | null = null
    timeOut: Date | null = null
    moneyTable: number = 0


    constructor(status: boolean, serve: Serve) {
        this.status = status;
    }

    totalMoneyTable(nu: number) {
        if (this.entryTime && this.timeOut && this.getTime() !== undefined) {

            return (this.timeOut.getMinutes() - this.entryTime.getMinutes()) * 4500 + nu
        }
    }

    getTime(): number | undefined {
        let timeOut = this.timeOut.getMinutes()
        let entryTime = this.entryTime.getMinutes()
        if (timeOut !== null && entryTime !== null) {
            if (timeOut && entryTime) {
                return timeOut - entryTime
            }
        }
    }


}
