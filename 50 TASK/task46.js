let num = ("Enter a number:"));
let prime = true;
if (num <= 1) {
   prime = false;
} e
lse {
 for (let count = 2; count < num; count++) {
 if (num % count === 0) {
prime = false;
   }
}
}
if (prime) {
    console.log("Prime!");
} else {
    console.log("Not prime!");
}

