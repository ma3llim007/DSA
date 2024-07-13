/*
    15. Reverse Letter Triangle Pattern

    A B C D E F
    A B C D E 
    A B C D
    A B C
    A B
    A
*/
function fifteenPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j <=(n-i-1); j++) {
            row += String.fromCharCode(65+j)+' ';
        }
        console.log(row);
    }
}
fifteenPattern(6)