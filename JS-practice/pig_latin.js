function translatePigLatin(str) {
    let arr = str.split('');
     if(arr[0] == 'a'|| arr[0] == 'e' || arr[0] == 'i' || arr[0] == 'o' || arr[0] == 'u'){
      let vowelStr =  arr.push("way");
       console.log(arr.join(''));
     }
     else{
    let cArr = arr.shift();
      //console.log(cArr);  
   let finalCon = arr.push(cArr,"ay");
   //console.log(arr.join(''));
     }
     return arr.join('');
   }
   
   translatePigLatin("consonant");