let total = 0;
for (let count = 1; count <= 50; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
        total += count;
    }
}
console.log("sum of multiples of 3 or 5: " + total);
