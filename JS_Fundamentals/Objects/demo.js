let myObj = {
    make: 'Opel',
    model: 'Zafira',
    color: 'grey',
    maxSpeed: 150,
    makeSound: () => {
        console.log('Vroom');
    }
}

let objKeys = Object.keys(myObj);
myObj.makeSound();

for(let key of objKeys){
    console.log(`${key} -> ${myObj[key]}`)
}