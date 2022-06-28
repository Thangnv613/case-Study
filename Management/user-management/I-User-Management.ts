import { IManagement } from '../I-Management';
import { User } from '../../model/User';
export interface IUserManagement extends IManagement<User> {
    findByUsername(username: string): User | null;

    findByPhoneNumber(phoneNumber: string): User | null;

    isLogin(username: string, password: string): boolean;
    
}