const answer = paris;
let trial = 0;

while (trial  < 3) {
    guess = prompt("What's the capital of France?").toLowerCase();
    if (guess === answer) {
        console.log("Correct!");
    }
     else {
console.log("Try again!");
}
    trial++;
}
