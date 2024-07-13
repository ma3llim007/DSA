/*
    20: Symmetric-Butterfly Pattern
    
    *          *
    **        **
    ***      ***
    ****    ****
    *****  *****
    ************
    *****  *****
    ****    ****
    ***      ***
    **        **
    *          *
*/

function twenty(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        for (let j = 0; j < 2 * (n - i); j++) {
            row += ' ';
        }
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
    for (let i = n-1; i >=1; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        for (let j = 0; j < 2 * (n - i); j++) {
            row += ' ';
        }
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }

}
twenty(6)