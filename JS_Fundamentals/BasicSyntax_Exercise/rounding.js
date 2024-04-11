function rounding(n, precision){
    if(precision > 15){
        precision = 15;
    }
    n = n.toFixed(precision)
    console.log(parseFloat(n));

}

rounding(3.1443242432432, 2)