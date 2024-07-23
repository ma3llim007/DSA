/*
    03. Right Angled Number Pyramid Pattern
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

function threePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
threePattern(3)