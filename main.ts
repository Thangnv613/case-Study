import { UserManagement } from './Management/user-management';
import * as rl from 'readline-sync';
import { User } from './model/User';


let choice: number = -1;
let userManagement = new UserManagement();
do {
    console.log('---------------------  Gét Gô  --------------------')
    console.log('---------------------  1.Login  ---------------------');
    console.log('---------------------  2.Register  ---------------------');
    console.log('---------------------  0.Exit  ---------------------');
    choice = +rl.question('What do you choose?')
    switch (choice) {
        case 1: {
            console.log('------------------ Login --------------------');
            break;
        }
        case 2: {
            console.log('------------------ Register --------------------');
            let user = createUser();
            userManagement.createNew(user);
            break;
        }
    }
}
while (choice != 0)


function createUser(): User {
    let username = createUserName();


    //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    let regexForPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    let password = '';
    let isValidPassword = true;
    do {
        password = rl.question('Enter Password')
        if (!regexForPassword.test(password)) {
            isValidPassword = false;
            console.log('Minimum eight characters, at least one uppercase letter, one lowercase letter and one number!');x
        }
        else{
            return isValidPassword = true;
        }
    } while (!isValidPassword);
    let confirmPassword = rl.question('Confirm Password');
    let phoneNumber = rl.question('Enter Your Phone Number');
    let name = rl.question('Enter your name');
    let user = new User(username, password, phoneNumber, name);
    return user;
}

function createUserName(): string{
    let username = '';

    let isValidUserName = true;
    do {
        username = rl.question('Enter Username ');
        let currentUserName = userManagement.findByUsername(username);
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

