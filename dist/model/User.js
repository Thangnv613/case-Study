"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, phoneNumber, name) {
        this._id = 0;
        this._role = 0;
        this._name = name;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._username = username;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get Password() {
        return this._password;
    }
    set Password(value) {
        this._password = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.User = User;
