/*function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    console.log(`${this.name} say hi!`);
}

function Employee(name, salary){
    Person.call(this, name);
    this.salary = salary
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.collectSalary = function(){
    console.log(`${this.name} collected ${this.salary}`);
}

const a = new Employee('Peter', 21343);
a.collectSalary();
a.sayHi();
*/

class Person{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`${this.name} says hi!`);
    }
}

class Employee extends Person {
    constructor(name, salary){
        super(name);
        this.salary = salary;
    }
    collectedSalary(){
        console.log(`${this.name} collected his salary ${this.salary}`);
        this.sayHi();
    }
}

let a = new Employee('Gosho', 123431);
//a.sayHi();
a.collectedSalary();