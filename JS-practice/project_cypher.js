function rot13(str) { // LBH QVQ VG!
    var newArr = [];
    for(var i = 0; i<= str.length;i++){
    
    let toAscii = str.charCodeAt(i)
    if(toAscii>64 && toAscii<91){
    
    var newAscii = (toAscii+13);
    
    if(newAscii > 90){
      newAscii = (newAscii-26);
    }
    
    let convert = String.fromCharCode(newAscii);
    newArr.push(convert);
    
    }else{
      newArr.push(str[i])
    }
    
    }
    return newArr.join('');
    
    }
    
    // Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));