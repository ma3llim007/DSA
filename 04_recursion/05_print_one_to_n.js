// PRINT ONE TO N NUMBER BY USING BACKTRACKING
let readLineSync = require("readline-sync");

function printOneToN(i, n) {
    if (i < 1) return;
    printOneToN(i - 1, n)
    console.log(i);
}


function main() {
    let n = readLineSync.question("Enter The N Number:- ");
    printOneToN(n, n)
}
main();