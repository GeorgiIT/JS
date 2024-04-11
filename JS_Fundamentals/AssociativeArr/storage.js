function solve(arr){
    let storage = new Map();
    for(let i = 0; i < arr.length; i++){
        let [stock, quantity] = arr[i].split(' ');
        quantity = Number(quantity);
        if(storage.has(stock)){
            let existing = storage.get(stock);
            storage.set(stock, existing + quantity);
        }
        else{
            storage.set(stock, quantity);
        }
        
    }
    for(let [k, v] of storage){
        console.log(k + " -> " + v);
    }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);