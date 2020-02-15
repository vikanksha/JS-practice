// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function difference(a){
    if (a >= 13){
        return (a-13)*2;
    }
    else{
        return (13-a);
    }
}
console.log(difference(20));
