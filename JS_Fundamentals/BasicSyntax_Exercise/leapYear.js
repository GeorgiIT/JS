function leapYear(n){
    if(n % 4 == 0 && n % 100 !== 0 || n % 400 == 0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

leapYear(4);