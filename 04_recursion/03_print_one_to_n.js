let readLineSync = require("readline-sync");

function oneToN(i, n) {
    if (i > n) return;
    console.log(i);
    oneToN(i + 1, n);
}

function main(){
    let n = readLineSync.question("Enter The N Value: ");
    oneToN(1, n);
}

main()