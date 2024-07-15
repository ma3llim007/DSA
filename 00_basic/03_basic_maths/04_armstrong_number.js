let readLineSync = require('readline-sync');
let userInput = readLineSync.question("Enter The Number:- ");

function armstrongNumber(n) {
    let sum = 0;
    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        n = Math.floor(n / 10);
        sum += Math.pow(lastDigit, 3);
    }
    if (sum == userInput) {
        console.log(userInput + " is an Armstrong number.");
    } else {
        console.log(userInput + " is not an Armstrong number.");
    }
}

armstrongNumber(userInput);