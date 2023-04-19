export class Staff {
    private _name : string
    private _entryTime: string
    private _timeOut : string

    constructor(name: string, entryTime: string, timeOut: string) {
        this._name = name;
        this._entryTime = entryTime;
        this._timeOut = timeOut;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get entryTime(): string {
        return this._entryTime;
    }

    set entryTime(value: string) {
        this._entryTime = value;
    }

    get timeOut(): string {
        return this._timeOut;
    }

    set timeOut(value: string) {
        this._timeOut = value;
    }
}