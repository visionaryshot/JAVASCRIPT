let num = (prompt("Enter a number:"));
let factor = 0;
for (let count = 1; count <= num; count++) {
    if (num % count === 0) {
        factor++;
    }
}
alert("Factors: " + factor);