for (let count = 1; count  <= 15; count ++) {
    if (count  % 3 === 0 && count % 5 === 0) {
        console.log("FizzBuzz!");
    }
     else if (count  % 3 === 0) {
        console.log("Fizz!");
    } 
    else if (count  % 5 === 0) {
        console.log("Buzz!");
    } 
    else {
        console.log(count );
 }
}
