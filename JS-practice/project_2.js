//pelindrome checking.
function palindrome(str) {
    let str1 = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let len = (str1.length/2);
    for(let i = 0; i<=len; i++ ){
       if(str1[i] !== str1[str1.length - 1 - i]){
       return false;
       }
    }
       
        return true;
       
     // Good luck!
     //return str1;
   }
   palindrome("eye"); 