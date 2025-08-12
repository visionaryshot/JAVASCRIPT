const color = "blue";
let trial = 0;

while (trial < 3) {
    guess = prompt("Guess my favorite color:").toLowerCase();
    if (guess === color) {
console.log("Correct!");

    } 
    else if (guess === "green") {
        console.log("Close!");
    }
     else {
        console.log("Wrong!");
    }
    trial++;
}
