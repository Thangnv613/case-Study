import { Person } from '../../model/person';
import { IManagement } from '../I-Management';

export class Idol implements IManagement<Person>{

    private static _idol: Person[] = [
        new Person(1, 'Cho Yeo-jeong', 22, 'Korean', '163 cm', '49 kg', '76 - 57 - 86 cm'),
        new Person(2, 'Yua Mikami', 30, 'Japanese', '159 cm', '52 kg', '83 - 59 - 88 cm'),
        new Person(3, 'Ánh Bảo', 19, 'Việt Nam', '158 cm', '50 kg', '80 - 60 - 86 cm')
    ];
    public static id = 3;
    getAll(): Person[] {

        return Idol._idol;
    }
    createNew(t: Person): void {
        Idol.id++;
        t.id = Idol.id;
        Idol._idol.push(t);
    }
    updateById(id: number, newPerson: Person): void {
        let index = this.findById(id);
        if (index != -1) {
            Idol._idol[index] = newPerson;
        }

    }
    removeById(id: number): void {
        let index = this.findById(id);
        if (index != -1) {
            Idol._idol.splice(index, 1);
        }
    }
    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < Idol._idol.length; i++) {
            if (id == Idol._idol[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
    findByAge(age: number): any {
        let person = [];
        for (let i = 0; i < Idol._idol.length; i++) {
            if (age == Idol._idol[i].age) {
                person.push(Idol._idol[i])
            }
        }
        console.table(person);
    }
    sortByAge():void {
        let sortByAge = Idol._idol.sort()
        console.log(sortByAge);
        
            
    }
}
