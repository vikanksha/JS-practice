//var i,j,result;
//for(i = 1 ; i<=5; i = i+1)
//{
  // for(j=1; j<i; j= j-1)
    //{
    //result = result+("*");
     //}
//console.log(result); 
//result = '';
//}
x = 10;
y = 10;
let str4 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if( j >= i ){
                        str4 = str4.concat("*");
                    }
                }
                str4 = str4.concat("\n")
            }

            console.log(str4)
