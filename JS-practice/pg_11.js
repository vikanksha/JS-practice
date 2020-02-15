// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function removechar(str,position){
part1 = str.substring(0,position);
part2 = str.substring(position+1, str.length);
return(part1+part2);
}
console.log(removechar("python", 1));