const myAnimal = "dog";
let userGuess = prompt("Guess any animal:").toLowerCase();
if (userGuess === myAnimal) {
console.log("Correct! It's a dog!");
} 
else {
    console.log("Nope, it's a dog!");
}
