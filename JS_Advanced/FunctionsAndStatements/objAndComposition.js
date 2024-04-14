const myAssocArray = {
    'first': 5,
    'second': 10,
    'third':15
}

function solve(arr){
    let townPopulation = {}
    for(let i of arr){
        let splitedArr = i.split(' <-> ')

        if(townPopulation[splitedArr[0]] == undefined){
            townPopulation[splitedArr[0]] = Number(splitedArr[1])
        }else{
            townPopulation[splitedArr[0]] += Number(splitedArr[1])
        }
    }

    
    for (let name in townPopulation){
        console.log(`${name} : ${townPopulation[name]}`)
    }
}

solve(['Istanbul <-> 1234211', 'Honk Kong <-> 2345123', 'Jerusalem <-> 23456789', 'Istanbul <-> 11'])