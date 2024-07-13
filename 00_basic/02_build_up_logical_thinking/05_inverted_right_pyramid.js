/*
    05. Inverted Right Pyramid Pattern
    * * * * *
    * * * *
    * * *
    * *
    *
*/

function fivePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n - i + 1; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
fivePattern(5)