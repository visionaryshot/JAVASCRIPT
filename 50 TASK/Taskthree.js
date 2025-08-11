function favoriteNumber() { 
const number = 7; 
let guess = Number(prompt("Guess my number:"));{ 
for (let user = 0; user <  guess.length; user++) { 
if (guess === number) { 
console.log("That's my favorite number!");
} 
else { 
console.log("Nice try, guess again!");
 } 
}
}
}
return favoriteNumber;