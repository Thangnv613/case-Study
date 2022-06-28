import { Person } from './../model/person';
import { Idol } from './../Management/admin-managenment/Idols-Management';
import { ShowIdolInformation } from './sub-menu-admin/show-Idol-menu';
import * as rl from 'readline-sync';
let addIdolInfomation = new Idol();
let updateIdolInformation = new Idol();
let dismissIdol = new Idol();
let findByAge = new Idol();
let sortIdolByAge = new Idol();
export class PersonMenu {
    private showIdolInformation = new ShowIdolInformation();

    runforIdol() {
        let choice = -1;
        do {

            console.log('---Idol Management---');
            console.log('1. Show information about Idols ');
            console.log('2. Add information about an idols ');
            console.log('3. Update information about idols');
            console.log('4. Dismiss information about an idol');
            console.log('5. Find information about an idol for age');
            console.log('6. Sort information about Idol by age');
            choice = +rl.question('What do you choose?');
            switch (choice) {
                case 1: {
                    console.log('---Show information about Idols ---');
                    this.showIdolInformation.run();
                    break;
                }
                case 2: {
                    addAnIDols();
                    break;
                }
                case 3: {
                    console.log('--- Update information about idols ---');
                    updateIolInformation()
                    break;
                }
                case 4: {
                    DismisAIdol();
                    break;
                }
                case 5: {
                    console.log(' --- Find Idols information by age ---');
                    let age = +rl.question('\nEnter the age you want to find.\n')
                    findByAge.findByAge(age);
                    break;
                }
                case 6: {
                    console.log('---Sort Idols information by age ---');
                    sortIdolByAge.sortByAge();
                }
            }

        } while (choice != 0);


    }
}
function DismisAIdol() {
    console.log('--- Dismiss an Idol ---');
    let id = +rl.question('\nEnter the ID you want to edit.\n');
    if (id == -1) {
        console.log('Nhap lai di ong chau');
    }
    else {
        dismissIdol.removeById(id);
        console.log('\n--- Dismiss successfully ---\n');
    }

}
function addAnIDols() {
    let name = rl.question('Enter your name: ');
    let id = 0;

    let age = +rl.question('Enter your age: ');
    let country = rl.question('Enter your country: ');
    let height = rl.question('Enter your height: ');
    let weight = rl.question('Enter your weight: ');
    let measurements = rl.question('Enter your measurements: ');
    let person = new Person(id, name, age, country, height, weight, measurements);
    addIdolInfomation.createNew(person);
}
function updateIolInformation() {
    let indexValue = +rl.question('Enter the ID you want to edit.')
    let index = updateIdolInformation.findById(indexValue);
    if (index == -1) {
        console.log('\nNhap lai di ong chau.\n');
    }
    else {
        let idol = updateIdolInformation.getAll()[index]
        console.log(idol);
        let name = rl.question('Enter your name: ');
        let age = +rl.question('Enter your age: ');
        let country = rl.question('Enter your country: ');
        let height = rl.question('Enter your height: ');
        let weight = rl.question('Enter your weight: ');
        let measurements = rl.question('Enter your measurements: ');
        let person = new Person(indexValue, name, age, country, height, weight, measurements);
        updateIdolInformation.updateById(indexValue, person);
    }
}

