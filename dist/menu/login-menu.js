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
exports.LoginMenu = void 0;
const user_management_1 = require("./../Management/user-management");
const rl = __importStar(require("readline-sync"));
const User_1 = require("../model/User");
var Loginchoice;
(function (Loginchoice) {
    Loginchoice[Loginchoice["LOGIN"] = 1] = "LOGIN";
    Loginchoice[Loginchoice["REGISTER"] = 2] = "REGISTER";
})(Loginchoice || (Loginchoice = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('---------------------  Gét Gô     --------------------');
            console.log('---------------------  1.Login    ---------------------');
            console.log('---------------------  2.Register ---------------------');
            console.log('---------------------  0.Exit     ---------------------');
            choice = +rl.question('What do you choose?');
            switch (choice) {
                case Loginchoice.LOGIN: {
                    console.log('------------------ Login --------------------');
                    break;
                }
                case Loginchoice.REGISTER: {
                    console.log('------------------ Register --------------------');
                    let user = this.createUser();
                    this.userManagement.createNew(user);
                    console.log('Register successfully created');
                    console.log('------------------------------------------------------------------------------------------------');
                    break;
                }
            }
        } while (choice != 0);
    }
    createUser() {
        let username = this.createUserName();
        let password = this.createPassword();
        this.ConfirmPassword(password);
        ;
        let phoneNumber = this.creatPhoneNumber();
        ;
        let name = rl.question('Enter your name: ');
        let user = new User_1.User(username, password, phoneNumber, name);
        return user;
    }
    createUserName() {
        let username = '';
        let isValidUserName = true;
        do {
            username = rl.question('Enter Username: ');
            let currentUserName = this.userManagement.findByUsername(username);
            if (currentUserName) {
                isValidUserName = false;
                console.log('UserName already exists!');
            }
            else {
                isValidUserName = true;
            }
        } while (!isValidUserName);
        return username;
    }
    createPassword() {
        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
        let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        let password = '';
        let isValidPassword = true;
        do {
            console.log('Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
            password = rl.question('Enter Password: ');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Minimum eight characters, at least one uppercase letter, one lowercase letter and one number!');
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    ConfirmPassword(password) {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Confirm Password: ');
            if (password != confirmPassword) {
                console.log('Password is incorrect');
            }
        } while (password != confirmPassword);
    }
    creatPhoneNumber() {
        let phoneNumber = '';
        let isValidPhoneNumber = true;
        do {
            let regexForPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            phoneNumber = rl.question('Enter Your Phone Number: ');
            if (!regexForPhoneNumber.test(phoneNumber)) {
                isValidPhoneNumber = false;
                console.log('This is not a valid phone number');
            }
            else {
                isValidPhoneNumber = true;
            }
        } while (!isValidPhoneNumber);
        return phoneNumber;
    }
}
exports.LoginMenu = LoginMenu;
