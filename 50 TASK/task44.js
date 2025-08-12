let total = 0;
for (let count = 1; count <= 5; count++) {
    let score = int(prompt("Enter score " + count + " (0-100):"));
    if (score >= 0 && score <= 100) {
        total += score;
    }
     else {
        console.log("Invalid score, counted as 0");
    }
}
console.log("Average: " + (total / 5));