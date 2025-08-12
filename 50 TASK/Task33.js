const answer = 25;
do {
userGuess = Int(prompt("Guess the number:"));
if (userGuess > answer) {
console.log("Too high!");
    } 
else if (userGuess < answer) {
 console.log("Too low!");
 } 
    else {
     console.log("Correct!");
    }
} while (userGuess !== answer);

