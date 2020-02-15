// Numeral to roman conversion.
function convertToRoman(num) {
var roman = "",
 romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
 numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
 
 for (var i = 0; i <= numbers.length; i++) {
 while (num >= numbers[i]) {
 roman += romanNumeral[i];
 num -= numbers[i];
 console.log(num);
 }
 }
 
 
 
 return roman;
}
console.log(convertToRoman(44));