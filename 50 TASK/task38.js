let start = int(prompt("Enter  number:"));
let end = Int(prompt("Enter  number:"));
for (let count = start; count <= end; count++) {
    if (count % 4 === 0) {
        console.log(count);
    }
}
