let readLineSync = require("readline-sync");
function fact(n) {
    if (n == 1) {
        return 1;
    }
    return n * fact(n - 1);
}


function main() {
    let n = readLineSync.question("Enter The Number:- ");
    console.log(fact(n));
}

main();