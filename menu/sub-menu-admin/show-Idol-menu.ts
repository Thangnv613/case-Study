import { Idol } from '../../Management/admin-managenment/Idols-Management';
import * as rl from 'readline-sync';

enum menuType {
    All_IDOL = 1,
    IDOL_KOREAN = 2,
    IDOL_JAPANESE = 3,
    OTHER_IDOL = 4
}
let idolManagement = new Idol()
export class ShowIdolInformation {
    run() {
        let choice = -1;
        do {
            console.log('1. All idol');
            console.log('2. Idol Korean Management');
            console.log('3. Idol Japanese Management');
            console.log('4. Other Idols Management');
            console.log('0. Exit');
            choice = +rl.question('What do you choice? ');
            switch (choice) {
                case menuType.All_IDOL: {
                    console.log('---All Idols information---');
                    let idolAll = idolManagement.getAll();
                    console.table(idolAll);
                    break;
                }
                case menuType.IDOL_KOREAN: {
                    console.log('---Idol Korean information---');
                    findIdolKoreanByCountry();
                    break;

                }
                case menuType.IDOL_JAPANESE: {
                    console.log('---Idol Japanese information---');
                    findIdolJapaneseByCountry();
                    break;

                }
                case menuType.OTHER_IDOL: {
                    console.log('---Other Idols information---');
                    findOtherIdolByCountry();
                    break;
                }
            }
        } while (choice != 0)
    }
}
function findIdolKoreanByCountry() {
    let idolAll = idolManagement.getAll();
    let person = []
    for (let i = 0; i < idolAll.length; i++) {
        let idolKorean = idolAll[i].country.toUpperCase() == 'KOREAN'
        if (idolKorean) {
            person.push(idolAll[i])
        }
    }
    console.table(person);
}
function findIdolJapaneseByCountry() {
    let idolAll = idolManagement.getAll();
    let person = []
    for (let i = 0; i < idolAll.length; i++) {
        let idolJapanese = idolAll[i].country.toUpperCase() == 'JAPANESE'
        if (idolJapanese) {
            person.push(idolAll[i])
        }
    }
    console.table(person);
}
function findOtherIdolByCountry() {
    let idolAll = idolManagement.getAll();
    let person = []
    for (let i = 0; i < idolAll.length; i++) {
        let other_Idol = idolAll[i].country.toLocaleUpperCase() !== 'KOREAN' && idolAll[i].country !== 'JAPANESE';

        if (other_Idol) {
            person.push(idolAll[i])
        }
    }
    console.table(person);
}

