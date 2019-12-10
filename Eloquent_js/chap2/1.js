let theNumber = Number(prompt("pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("your no is the square root of" + theNumber *theNumber);
} else {
    console.log("please enter a no.")
}