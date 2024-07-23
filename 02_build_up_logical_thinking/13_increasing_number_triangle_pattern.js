/*
    13. Increasing Number Triangle Pattern
    1
    2  3
    4  5  6
    7  8  9  10
    11  12  13  14  15
    16  17  18  19  20  21
*/
function thirteenPattern(n) {
    for (let i = 1; i <= n; i++) {
        let num = 1;
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += num;
            num = num + 1;
        }
        console.log(row);
    }
}
thirteenPattern(6)