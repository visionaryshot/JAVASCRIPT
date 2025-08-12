const pin = 1234;
let tries = 0;

while (tries < 3) {
    entry = prompt("Enter PIN:");
    if (entry === pin) {
        console.log("Access granted!");

    } 
    else {
        console.log("Try again!");
    }
    tries++;
}
if (tries ===  && entry !== pin) {
    console.log("Locked!");
}

