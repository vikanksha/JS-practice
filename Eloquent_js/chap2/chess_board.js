let row = 8;
let col = 8;
let op = ""
for(let i = 0; i<row; i++){
    for(let j = 0; j<col; j++){
        if((i+j)%2==0){
            op = op + " ";
        }else{
            op = op + "#"
        }
    }
   op =  op + "\n"
}
console.log(op);