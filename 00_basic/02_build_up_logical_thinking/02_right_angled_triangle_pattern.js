/*
    02. Right Angled Triangle Pattern
    *
    * *
    * * *
    * * * *
    * * * * *
*/

function twoPattern(n) {
    for (let i = 0; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
twoPattern(3)