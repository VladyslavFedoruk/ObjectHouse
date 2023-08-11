class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

const person1 = new Person("Петро", "чоловік");
const person2 = new Person("неПетро", "інший");
const person3 = new Person("Ганна", "жінка");


class Flat {
    constructor() {
         this.community = [];
    }
    addInhabitant(person) {
        this.community.push(person);
    }
}
const flat = new Flat();


flat.addInhabitant(person1);
flat.addInhabitant(person2);
flat.addInhabitant(person3);

console.log(flat.community);


