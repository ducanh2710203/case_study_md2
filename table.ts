
enum Serve {
    none=0,
    food=10,
    water,
    rentalCane=30,


}
export class Table {
    status : boolean = false
    serve : Serve = Serve.none
    entryTime: Date|null = null
    timeOut : Date|null = null


    constructor(status: boolean, serve: Serve) {
        this.status = status;
        this.serve = serve;

    }
    totalMoneyTable(){
        if (this.entryTime&& this.timeOut){return (this.timeOut.getSeconds()-this.entryTime.getSeconds())*4500}

    }

}
