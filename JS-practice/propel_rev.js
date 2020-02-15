// Divide a string in given no of parts then reverse every parts.
function cut(str, size) {
    let nArr = [];
  
    for (var j = 0; j < str.length; j += size) {
      nArr.push(str.substr(j, size).split('').reverse().join(""));
    }
     let first =  nArr.join("");
     return first;
     console.log(first);
    // let rever = first.split(" ");
    }
  console.log(cut("PropelSchool",3));