const power = function(base,exponent){
    let result = 1;
    for(let count = 0; count<exponent;count = count+1){
        result = result*base;
    }
    return result;
};
console.log(power(2,10));