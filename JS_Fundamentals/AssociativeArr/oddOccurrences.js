function solve(input){
    let arr = input.split(' ');
    let occurrences = new Map();

    for(let word of arr){
        word = word.toLowerCase();
        if(!occurrences.has(word)){
            occurrences.set(word, 0);
        }
        occurrences.set(word, occurrences.get(word) + 1); // counter
    }

    let storage = []
    for(let [key, value] of occurrences.entries()){
        if(value % 2 !== 0){
            storage.push(key);
        }
    }
    console.log(storage.join(' '));
    

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')