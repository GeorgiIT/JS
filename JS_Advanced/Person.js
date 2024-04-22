class Person {

    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName

        return firstName, lastName;
    };
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    };
    set fullName(value){
        [this.firstName, this.lastName] = value.split(' ');
    }
}

let person = new Person('Georgi', 'Ivanov');
person.lastName = 'Todorov';

person.fullName();