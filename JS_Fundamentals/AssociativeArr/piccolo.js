function solve(arr){
    let parkingLot = {};
    for(let car of arr){
        let [command, carNumber] = car.split(', ');
        if(command === "IN"){
            parkingLot[carNumber] = 1; // 1 means that the car is inside the parking
        }
        else{
            delete parkingLot[carNumber]; // Remove the car from the parking lot
        }
    }
    return Object.keys(parkingLot)
    .sort((a,b) => a.localeCompare(b))
    .join('\n');


    
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)