let celsius = float(prompt("Enter temperature in Celsius:"));
if (celsius < -273) {
    console.log("Impossible temperature!");
} 
else {
    for (let count = 0; count < 5; count++) {
        let temp = celsius + count;
        let fahrenheit = (temp * 9 / 5) + 32;
            
}

