/*
    19. Symmetric Void Pattern

    ************
    *****  *****
    ****    ****
    ***      ***
    **        **
    *          *
    *          *
    **        **
    ***      ***
    ****    ****
    *****  *****
    ************
*/

function nineteen(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        // Stars
        for (let j = 0; j < n - i; j++) {
            row += '*';
        }

        // Spaces
        for (let j = 0; j < 2 * i; j++) {
            row += ' ';
        }
        // Stars
        for (let j = 0; j < n - i; j++) {
            row += '*';
        }
        console.log(row);
    }
    for (let i = n-1; i >=0; i--) {
        let row = '';
        // Stars
        for (let j = 0; j < n - i; j++) {
            row += '*';
        }

        // Spaces
        for (let j = 0; j < 2 * i; j++) {
            row += ' ';
        }
        // Stars
        for (let j = 0; j < n - i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

nineteen(6);