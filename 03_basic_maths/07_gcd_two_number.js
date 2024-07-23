let readLineSync = require("readline-sync");
let num1 = readLineSync.question("Enter The first number:- ");
let num2 = readLineSync.question("Enter The second number:- ");

function gcdTwoNumber(n1, n2) {
    let gcdNumber = '';
    let minTwoNumber = Math.min(n1, n2);
    for (let i = 1; i <= minTwoNumber; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            gcdNumber = i;
        }
    }
    console.log("GCD of " + n1 + " and " + n2 + " is: " + gcdNumber);
}

gcdTwoNumber(num1, num2);