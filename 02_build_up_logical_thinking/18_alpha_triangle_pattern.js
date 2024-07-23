/*
    18. Alpha-Triangle Pattern
    F
    E F
    D E F
    C D E F
    B C D E F
    A B C D E F
*/
function eighteen(n) {
    let LetterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let actualLetter = LetterArray[n - 1];
    for (let i = 0; i < n; i++) {
        let row = '';
        let startCharCode = Number(actualLetter.charCodeAt(0)) - i;

        for (let j = startCharCode; j <= Number(actualLetter.charCodeAt(0)); j++){
            row += String.fromCharCode(j) + ' ';
        }
        console.log(row);
    }

}

eighteen(6)