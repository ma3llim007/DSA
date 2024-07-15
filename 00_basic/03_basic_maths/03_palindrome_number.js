let readLineSync = require("readline-sync");
let userNumber = readLineSync.question("Enter The Number:- ");

function palindromeNumber(n) {
    let output = '';
    let reverseNumber = 0;
    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        n = Math.floor(n / 10);
        output += ((reverseNumber * 10) + lastDigit);
    }
    if (userNumber === output) {
        console.log(`The number ${userNumber} Is Palindrome Number.`);
    } else {
        console.log(`The number ${userNumber} Is Not Palindrome Number.`);
    }
}
palindromeNumber(userNumber);