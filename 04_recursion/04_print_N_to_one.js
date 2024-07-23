let readLineSync = require("readline-sync");
function printNToOne(i, n) {
    if (i < 1) return;
    console.log(i);
    printNToOne(i - 1, n);
}

function main() {
    let n = readLineSync.question("Enter The N Number:- ");
    printNToOne(n, n);
}
main();