"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const e_role_1 = require("./../model/e-role");
const User_1 = require("./../model/User");
class UserManagement {
    constructor() {
        let admin = new User_1.User('admin', 'admin', 'admin@gmail.com', 'admin');
        admin.role = e_role_1.ROLE.ADMIN;
        admin.id = UserManagement.id;
        UserManagement.users.push(admin);
    }
    getAll() {
        return UserManagement.users;
    }
    createNew(t) {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = e_role_1.ROLE.USER;
        UserManagement.users.push(t);
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }
    findByUsername(username) {
        for (let user of UserManagement.users) {
            if (user.username == username) {
                return user;
            }
        }
        return null;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; index < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
    finByPhoneNumber(phoneNumber) {
        for (let user of UserManagement.users) {
            if (user.phoneNumber == phoneNumber) {
                return user;
            }
        }
        return null;
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 2;
