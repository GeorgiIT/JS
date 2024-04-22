const myObj = {
    name: 'Peter',
    age: 22
}

Object.getOwnPropertyDescriptor(myObj, 'name');

Object.defineProperty(myObj, 'lastName', {
    value: 'Petrov',
    writable: true,
    enumerable: true,
    configurable: true
})



const myCollection = {};

Object.defineProperty(myCollection, 'size', {
    enumerable: false,
    get: function() {
        return Object.keys(this).length;
    }
});

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.write = function(m){
    console.log(`${this.firstName} ${this.lastName} wrote ${m}`);
};


let a = new Person('Hristo', 'Botev');
a.write("Na proshtavane");

let b = new Person('Paisii', 'Halendarski');
b.write('Istoriya slavenobulgarska');