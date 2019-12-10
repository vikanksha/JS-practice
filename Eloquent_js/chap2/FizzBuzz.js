for(let number = 1; number<=20; number = number+1){
    let result = " ";
    if(number % 3 == 0) result = result+"Fizz";
    if (number%5==0) result = result+"Buzz";
    console.log(result||number);
}