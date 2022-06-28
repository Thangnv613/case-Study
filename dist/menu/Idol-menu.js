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
exports.IdolManagement = void 0;
const person_Management_1 = require("./../Management/admin-managenment/person-Management");
const rl = __importStar(require("readline-sync"));
var menuType;
(function (menuType) {
    menuType[menuType["All_IDOL"] = 1] = "All_IDOL";
    menuType[menuType["IDOL_KOREAN"] = 2] = "IDOL_KOREAN";
    menuType[menuType["IDOL_JAPANESE"] = 3] = "IDOL_JAPANESE";
    menuType[menuType["OTHER_IDOL"] = 4] = "OTHER_IDOL";
})(menuType || (menuType = {}));
let idolManagement = new person_Management_1.Idol();
class IdolManagement {
    run() {
        let choice = -1;
        do {
            console.log('1. All idol');
            console.log('2. Idol Korean Management');
            console.log('3. Idol Japanese Management');
            console.log('4. Other Idols Management');
            console.log('0. Exit');
            choice = +rl.question('What do you choice?');
            switch (choice) {
                case menuType.All_IDOL: {
                    console.log('---All Idols information---');
                    let idolAll = idolManagement.getAll();
                    console.table(idolAll);
                    break;
                }
                case menuType.IDOL_KOREAN: {
                    console.log('---Idol Korean information---');
                    findIdolKoreanByCountry();
                    break;
                }
                case menuType.IDOL_JAPANESE: {
                    console.log('---Idol Japanese information---');
                    findIdolJapaneseByCountry();
                    break;
                }
                case menuType.OTHER_IDOL: {
                    console.log('---Other Idols information---');
                    findOtherIdolByCountry();
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.IdolManagement = IdolManagement;
function findIdolKoreanByCountry() {
    let idolAll = idolManagement.getAll();
    for (let i = 0; i < idolAll.length; i++) {
        if (idolAll[i].country == 'Korean') {
            console.table(idolAll[i]);
        }
        else {
            console.log(' No Idol Korean information');
        }
    }
}
function findIdolJapaneseByCountry() {
    let idolAll = idolManagement.getAll();
    for (let i = 0; i < idolAll.length; i++) {
        if (idolAll[i].country == 'Korean') {
            console.table(idolAll[i]);
        }
        else {
            console.log(' No Idol Korean information');
        }
    }
}
function findOtherIdolByCountry() {
    let idolAll = idolManagement.getAll();
    for (let i = 0; i < idolAll.length; i++) {
        if (idolAll[i].country == 'Korean') {
            console.table(idolAll[i]);
        }
        else {
            console.log(' No Idol Korean information');
        }
    }
}
