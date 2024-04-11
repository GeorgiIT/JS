function convertToJSON(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }
    let parsedJson = JSON.stringify(person);
    console.log(parsedJson);
}

let input = {
    firstName: "Georgi",
    lastName: "Todorov",
    hairColor: "blue"
}
convertToJSON("Gogo", "Todorov", "blue");