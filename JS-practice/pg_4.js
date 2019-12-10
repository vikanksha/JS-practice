// Leap year program.
function leapYear(year){
    if(year % 100 === 0 && year % 400 === 0 || year % 4 === 0){
        return "leapYear";
    }
    else{ 
    return "not a leap year";

    }
}
console.log(leapYear(2021))