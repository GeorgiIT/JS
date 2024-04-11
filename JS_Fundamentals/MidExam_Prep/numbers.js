function solve(input){
    let actualArr = input.split(' ').map(Number)
    let arrSum = 0;
    for(let i = 0; i < actualArr.length; i++){
        arrSum += actualArr[i];
    }
    let avg = arrSum / actualArr.length

    let numbersBiggerThanAvg = [];

    for(let i = 0; i < actualArr.length; i++){
        if(actualArr[i] > avg){
            numbersBiggerThanAvg.push(actualArr[i]);
        }
    }
    if(numbersBiggerThanAvg.length == 0){
        console.log("No")
    }
    else{
        numbersBiggerThanAvg.sort((a, b) => b - a); 
        numbersBiggerThanAvg = numbersBiggerThanAvg.slice(0, 5);
        console.log(numbersBiggerThanAvg.join(' '));
    }
    
}

solve("-1 -2 -3 -4 -5 -6")