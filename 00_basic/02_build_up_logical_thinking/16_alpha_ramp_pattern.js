/*
    16. Alpha Ramp Pattern
    A 
    B B
    C C C
    D D D D
    E E E E E
    F F F F F F
*/
function sixteenPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        let Char = String.fromCharCode(65 + i);
        for (let j = 0; j <=i; j++){
            row += Char + ' ';
        }
        console.log(row);
    }
}
sixteenPattern(6)