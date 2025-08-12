const correctPassword = python;
let trial = 0;
let userInput;
while (trial < 3) {
userInput = prompt("Enter password:");
 if ( userInput === correctPassword) {
 console.log("Success!");
 } 
 else {
console.log("Try again!");
}
  trial++;
}
if (trial === 3 && userInput !== correctPassword) {
console.log("Locked out!");
}
