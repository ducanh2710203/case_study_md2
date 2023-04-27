export class Staff {
    private _name: string
    private _account: string
    private _password: string

    constructor(name: string, _account: string, _password: string) {
        this._name = name;
        this._account = _account;
        this._password = _password;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get account(): string {
        return this._account;
    }

    set account(value: string) {
        this._account = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}