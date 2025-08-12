let num1 = int(prompt("Enter first number:"));
let num2 = int(prompt("Enter second number:"));
let userInput = prompt("Enter + to add or - to subtract:");
if (userInput === "+") {
console.log(num1 + " + " + num2 + " = " + (num1 + num2));
} 
else if (userInput=== "-") {
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
} else {
console.log("Invalid Input!");
}