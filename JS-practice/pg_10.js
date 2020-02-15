// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
function stringcheck(str){
    if (str == null || str == undefined || str.substring(0,2) == 'py'){
        return str;
    }
    else{
        return 'py'+str;
    }
}
console.log(stringcheck('le'));