function jsonParse(objectAsString){
    let parsedObject = JSON.parse(objectAsString);
    for(let k of Object.keys(parsedObject)){
        console.log(`${k}: ${parsedObject[k]}`)
    }
    
}
let input = '{"name": "Georgi", "age": 26, "town": "Sofia"}';

jsonParse(input);