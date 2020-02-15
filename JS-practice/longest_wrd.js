// Find the Longest Word in a String.
function findLongestWordLength(str) {
    var maxLen = 0;
     arr = str.split(' ');
     for(var i =0; i<arr.length;i++){
       if(arr[i].length>maxLen){
         maxLen = arr[i].length;
       }
     }return maxLen;
   }
   
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));