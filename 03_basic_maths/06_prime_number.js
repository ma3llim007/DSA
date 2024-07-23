let readLineSync = require("readline-sync");
let userInput = readLineSync.question("Enter The Number:- ");
let count = 0;
let primeNumber = [];

function bruteForceApproach(userInput) {
    for (let i = 0; i <= userInput; i++) {
        if (userInput % i === 0) {
            count = count + 1;
        }
    }

    if (count == 2) {
        console.log(userInput + " is a prime number.");
    }
    else {
        console.log(userInput + " is not a prime number.");
    }
}

function optimalApproach(userInput) {
    let n = Math.sqrt(userInput);
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            count = count + 1;
            if ((n / i) != i) {
                count++;
            }
        }
    }
    if (count == 2) {
        console.log(userInput + " is a prime number.");
    } else {
        console.log(userInput + " is not a prime number.");
    }
}
optimalApproach(userInput);