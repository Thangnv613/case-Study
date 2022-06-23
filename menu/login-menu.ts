import { UserManagement } from './../Management/user-management';
import * as rl from 'readline-sync';
import { User } from '../model/User';

enum Loginchoice {
    LOGIN = 1,
    REGISTER = 2
}

export class LoginMenu {
    private userManagement = new UserManagement();
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
        }
        while (choice != 0);
    }

    createUser(): User {
        let username = this.createUserName();

        let password = this.createPassword();

        this.ConfirmPassword(password);;

        let phoneNumber = this.creatPhoneNumber();;


        let name = rl.question('Enter your name: ');

        let user = new User(username, password, phoneNumber, name);
        return user;




    }


    createUserName(): string {
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

    createPassword(): string {

        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
        let regexForPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        let password = '';
        let isValidPassword = true;
        do {
            console.log('Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
            password = rl.question('Enter Password: ')
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
    ConfirmPassword(password: string): void {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Confirm Password: ');
            if (password != confirmPassword) {
                console.log('Password is incorrect');

            }

        } while (password != confirmPassword);

    }
    creatPhoneNumber(): string {
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