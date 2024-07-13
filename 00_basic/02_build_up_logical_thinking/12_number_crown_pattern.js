/*
    12. Number Crowm Pattern
        1          1
        12        21
        12       321
        1234    4321
        12345  54321
        123456654321
*/

let n = 6;
function func() {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += j;
        }
        let space = 2 * (n - i);
        for (let k = 0; k < space; k++) {
            row += ' ';
        }
        for (let l = i; l >= 1; l--) {
            row += l;
        }
        space -= 2;
        console.log(row);
    }
}
func(5)