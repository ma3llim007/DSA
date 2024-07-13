/*
    01. Rectangular Star Patterns
    * * * *
    * * * *
    * * * *
    * * * *
*/

function onePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* ';
        }
        console.log(row);
    }
    console.log(" ");
}
onePattern(5)