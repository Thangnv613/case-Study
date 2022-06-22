import { ROLE } from './../model/e-role';
import {  User } from './../model/User';
import { IManagement } from './I-Management';



export class UserManagement implements IManagement<User> {
    public static users: User[] = [];
    public static id:number = 2;
    constructor(){
        let admin = new User('admin','admin','admin@gmail.com','admin');
        admin.role = ROLE.ADMIN ;
        admin.id = UserManagement.id;
        UserManagement.users.push(admin);
    }
    getAll(): User[]{
        return UserManagement.users;
    }
    createNew(t:User):void{
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role =ROLE.USER;
        UserManagement.users.push(t)
    }
    updateById(id: number, t: User): void{
        let index = this.findById(id);
        if(index != -1){
            UserManagement.users[index] = t;
    }
}
    removeById(id: number): void{
        let index = this.findById(id)
        if(index != -1){
        UserManagement.users.splice(index,1);
    }
}
    findByUsername(username: string): User | null{
        for (let user of UserManagement.users) {
            if(user.username == username){
                return user;
            }
        }
        return null;

    }
    findById(id: number):number{
        let index = -1
        for (let i = 0; index < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i; 
                break;
            }
            
        }
        return index;
    }
}
