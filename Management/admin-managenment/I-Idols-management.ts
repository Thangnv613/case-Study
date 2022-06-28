import { IManagement } from '../I-Management';
import { Person } from '../../model/person';
export interface IPersonManagement extends IManagement<Person>{
    
    findByUsername(username: string): Person | null;

    findByPhoneNumber(phoneNumber: string): Person | null;

}
