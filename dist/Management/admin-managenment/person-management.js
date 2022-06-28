"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Idol = void 0;
const person_1 = require("./../../model/person");
class Idol {
    constructor() {
        let idolJapanese = new person_1.Person('Yua Mikami', 30, 'Japanese', '159 cm', '52 kg', '83 - 59 - 88 cm');
        let idolKorean = new person_1.Person('Cho Yeo-jeong', 22, 'Korean', '163 cm', '49 kg', '76 - 57 - 86 cm');
        let otherIdol = new person_1.Person('Ánh Bảo', 19, 'Việt Name', '158 cm', '50 kg', '80 - 60 - 86 cm');
        Idol._idol.push(idolJapanese, idolKorean, otherIdol);
    }
    getAll() {
        return Idol._idol;
    }
    createNew(t) {
        Idol.id++;
        t.id = Idol.id;
        Idol._idol.push(t);
    }
    updateById(id, t) {
    }
    removeById(id) {
    }
    findByUsername(username) {
        return null;
    }
    findByPhoneNumber(phoneNumber) {
        return null;
    }
}
exports.Idol = Idol;
Idol._idol = [];
Idol.id = 1;
