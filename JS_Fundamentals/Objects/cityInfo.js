function cityInfo(city){
    let arr = Object.entries(city);
    

    for(let [k, v] of arr){
        console.log(`${k} -> ${v}`)
    }


}

let input = {
    name: 'Sofia',
    area: 333,
    population: 1234567,
    country: 'Bulgaria',
    postCode: '1000'
}
cityInfo(input);