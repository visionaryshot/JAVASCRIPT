let star = [1, 3, 5, 3, 1];
for (let count = 0; count < star.length; count++) {
    let stars = "";
    for (let counter = 0; counter < star[count]; counter++) {
        stars += "*";
    }
    console.log(stars);
}
