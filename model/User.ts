
export class User {
    private _id: number = 0;
    private _name: string;
    private _password: string;
    private _phoneNumber: string;
    private _username: string;
    private _role: number = 0;
    constructor(username: string,  password: string, phoneNumber: string,name: string) {
        this._name = name;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._username = username;
    
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get Password(): string {
        return this._password;
    }
    public set Password(value: string) {
        this._password = value;
    }
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string){
        this._username = value;
    }

    public get role(): number {
        return this._role;
    }
    public set role(value: number) {
        this._role = value
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }


}