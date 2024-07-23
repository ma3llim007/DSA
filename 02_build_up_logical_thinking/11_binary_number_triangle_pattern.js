/*
    11. Binary Number Triangle Pattern
        1
        01
        101
        0101
        10101
        010101
*/

function elevenPattern(n) {
    let stars = 1;
    for (let i = 0; i < n; i++) {
        let row = '';
        if (i % 2 === 0) {
            stars = 1;
        } else {
            stars = 0;
        }
        for (let j = 0; j <= i; j++) {
            row += stars;
            stars = 1 - stars;
        }
        console.log(row);
    }
}
elevenPattern(5)