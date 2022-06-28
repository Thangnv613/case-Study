"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMenu = void 0;
const person_1 = require("./../model/person");
const Idols_Management_1 = require("./../Management/admin-managenment/Idols-Management");
const show_Idol_menu_1 = require("./sub-menu-admin/show-Idol-menu");
const rl = __importStar(require("readline-sync"));
let addIdolInfomation = new Idols_Management_1.Idol();
let updateIdolInformation = new Idols_Management_1.Idol();
let dismissIdol = new Idols_Management_1.Idol();
let findByAge = new Idols_Management_1.Idol();
let sortIdolByAge = new Idols_Management_1.Idol();
class PersonMenu {
    constructor() {
        this.showIdolInformation = new show_Idol_menu_1.ShowIdolInformation();
    }
    runforIdol() {
        let choice = -1;
        do {
            console.log('---Idol Management---');
            console.log('1. Show information about Idols ');
            console.log('2. Add information about an idols ');
            console.log('3. Update information about idols');
            console.log('4. Dismiss information about an idol');
            console.log('5. Find information about an idol for age');
            console.log('6. Sort information about Idol by age');
            choice = +rl.question('What do you choose?');
            switch (choice) {
                case 1: {
                    console.log('---Show information about Idols ---');
                    this.showIdolInformation.run();
                    break;
                }
                case 2: {
                    addAnIDols();
                    break;
                }
                case 3: {
                    console.log('--- Update information about idols ---');
                    updateIolInformation();
                    break;
                }
                case 4: {
                    DismisAIdol();
                    break;
                }
                case 5: {
                    console.log(' --- Find Idols information by age ---');
                    let age = +rl.question('\nEnter the age you want to find.\n');
                    findByAge.findByAge(age);
                    break;
                }
                case 6: {
                    console.log('---Sort Idols information by age ---');
                    sortIdolByAge.sortByAge();
                }
            }
        } while (choice != 0);
    }
}
exports.PersonMenu = PersonMenu;
function DismisAIdol() {
    console.log('--- Dismiss an Idol ---');
    let id = +rl.question('\nEnter the ID you want to edit.\n');
    if (id == -1) {
        console.log('Nhap lai di ong chau');
    }
    else {
        dismissIdol.removeById(id);
        console.log('\n--- Dismiss successfully ---\n');
    }
}
function addAnIDols() {
    let name = rl.question('Enter your name: ');
    let id = 0;
    let age = +rl.question('Enter your age: ');
    let country = rl.question('Enter your country: ');
    let height = rl.question('Enter your height: ');
    let weight = rl.question('Enter your weight: ');
    let measurements = rl.question('Enter your measurements: ');
    let person = new person_1.Person(id, name, age, country, height, weight, measurements);
    addIdolInfomation.createNew(person);
}
function updateIolInformation() {
    let indexValue = +rl.question('Enter the ID you want to edit.');
    let index = updateIdolInformation.findById(indexValue);
    if (index == -1) {
        console.log('\nNhap lai di ong chau.\n');
    }
    else {
        let idol = updateIdolInformation.getAll()[index];
        console.log(idol);
        let name = rl.question('Enter your name: ');
        let age = +rl.question('Enter your age: ');
        let country = rl.question('Enter your country: ');
        let height = rl.question('Enter your height: ');
        let weight = rl.question('Enter your weight: ');
        let measurements = rl.question('Enter your measurements: ');
        let person = new person_1.Person(indexValue, name, age, country, height, weight, measurements);
        updateIdolInformation.updateById(indexValue, person);
    }
}
