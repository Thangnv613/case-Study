"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id, name, age, country, height, weight, measurements) {
        this._id = 1;
        this._name = name;
        this._country = country;
        this._height = height;
        this._weight = weight;
        this._measurements = measurements;
        this._age = age;
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get country() {
        return this._country;
    }
    get height() {
        return this._height;
    }
    get weight() {
        return this._weight;
    }
    get measurements() {
        return this._measurements;
    }
    get age() {
        return this._age;
    }
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set country(value) {
        this._country = value;
    }
    set height(value) {
        this._height = value;
    }
    set weight(value) {
        this._weight = value;
    }
    set measurements(value) {
        this._measurements = value;
    }
    set age(value) {
        this._age = value;
    }
}
exports.Person = Person;
