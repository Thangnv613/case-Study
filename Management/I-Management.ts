import { Person } from './../model/person';
export interface IManagement<T>{
    getAll(): T[];
    createNew(t:T): void;
    updateById(id: number,t:T): void;
    findById(id: number): number;
    findByAge(age: number): number;
    removeById(id : number): void;
    sortByAge():void;
}