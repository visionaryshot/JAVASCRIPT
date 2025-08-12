let word = prompt("Enter a word:");
let vowelCount = 0;
for (let count = 0; count < word.length; count++) {
    let letter = word[count].toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowelCount++;
    }
}
console.log("Vowels: " + vowelCount);
