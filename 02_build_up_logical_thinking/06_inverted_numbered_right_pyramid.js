/*
    06. Inverted Number Right Pyramid Pattern
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/

function sixPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            process.stdout.write(`${j} `);
        }
        console.log();
    }
}
sixPattern(5);
