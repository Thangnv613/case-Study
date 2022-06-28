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
const rl = __importStar(require("readline-sync"));
var MenuType;
(function (MenuType) {
    MenuType[MenuType["IDOL_KOREAN"] = 1] = "IDOL_KOREAN";
    MenuType[MenuType["IDOL_JAPANESE"] = 2] = "IDOL_JAPANESE";
    MenuType[MenuType["OTHER_IDOL"] = 3] = "OTHER_IDOL";
})(MenuType || (MenuType = {}));
class IdolManagement {
    run() {
        let choice = -1;
        do {
            console.log('---Idol Management---');
            console.log('1. Idol Korean Management');
            console.log('2. Idol Japanese Management');
            console.log('3. Other Idols Management');
            console.log('0. Exit');
            choice = +rl.question('What do you choice?');
            switch (choice) {
                case MenuType.IDOL_KOREAN: {
                    console.log('---Idol Korean Management---');
                    break;
                }
                case MenuType.IDOL_JAPANESE: {
                    console.log('---Idol Japanese Management---');
                    break;
                }
                case MenuType.OTHER_IDOL: {
                    console.log('---Other Idols Management---');
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.IdolManagement = IdolManagement;
