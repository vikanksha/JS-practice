function simpleArraySum(ar) {
 var count = 0;
    for (var i = 0; i < ar.length; i++) {
      count += ar[i];
    }
    return count;
}console.log(simpleArraySum([1,2,3]));