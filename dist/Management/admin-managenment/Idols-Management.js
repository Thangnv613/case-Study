"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Idol = void 0;
const person_1 = require("../../model/person");
class Idol {
    getAll() {
        return Idol._idol;
    }
    createNew(t) {
        Idol.id++;
        t.id = Idol.id;
        Idol._idol.push(t);
    }
    updateById(id, newPerson) {
        let index = this.findById(id);
        if (index != -1) {
            Idol._idol[index] = newPerson;
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index != -1) {
            Idol._idol.splice(index, 1);
        }
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < Idol._idol.length; i++) {
            if (id == Idol._idol[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
    findByAge(age) {
        let person = [];
        for (let i = 0; i < Idol._idol.length; i++) {
            if (age == Idol._idol[i].age) {
                person.push(Idol._idol[i]);
            }
        }
        console.table(person);
    }
    sortByAge() {
        let sortByAge = Idol._idol.sort();
        console.log(sortByAge);
    }
}
exports.Idol = Idol;
Idol._idol = [
    new person_1.Person(1, 'Cho Yeo-jeong', 22, 'Korean', '163 cm', '49 kg', '76 - 57 - 86 cm'),
    new person_1.Person(2, 'Yua Mikami', 30, 'Japanese', '159 cm', '52 kg', '83 - 59 - 88 cm'),
    new person_1.Person(3, 'Ánh Bảo', 19, 'Việt Nam', '158 cm', '50 kg', '80 - 60 - 86 cm')
];
Idol.id = 3;
