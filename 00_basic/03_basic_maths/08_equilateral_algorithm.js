let readLineSync = require("readline-sync");
let num1 = readLineSync.question("Enter The first number:- ");
let num2 = readLineSync.question("Enter The second number:- ");

function equilateralAlgorithm(n1, n2) {
    while (n1 > 0 && n2 > 0) {
        if (n1 > n2) {
            n1 = n1 % n2;
        } else {
            n2 = n2 % n1;
        }
    }
    if (n1 == 0) {
        console.log("GCD of", num1, "and", num2, "is:", n2);
    } else {
        console.log("GCD of", num1, "and", num2, "is:", n1);
    }
}

equilateralAlgorithm(num1, num2)