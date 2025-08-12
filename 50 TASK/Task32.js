let sumEvens = 0;
for (let count = 1; count <= 20; count++) {
    if (count % 2 === 0) {
        sumEvens += count;
    }
}
console.log("Sum of evens: " + sumEvens);
