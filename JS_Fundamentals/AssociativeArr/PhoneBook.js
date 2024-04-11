function solve(arr){
    let phoneBook = {};
    
    for (let line of arr){
        let tokens = line.split(' ');
        let [name, phone] = tokens;
        phoneBook[name] = phone;
    }
    for(let key in phoneBook){
        console.log(`Name: ${key} -> ${phoneBook[key]}`)
    }
}
solve(["Tim 0899999999",
"Peter 1234567890",
"Bill 0987654321",
"Tim 1231231231"])