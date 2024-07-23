let readSyncline = require('readline-sync');
let userNumber = readSyncline.question("Enter The Number:- ")

function reverseDigits(n) {
    let reverseDigitsNumber = 0;
    let output = '';
    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        n = Math.floor(n / 10);
        output += ((reverseDigitsNumber * 10) + lastDigit);
    }
    console.log(`The number ${userNumber} has ${output} digits.`);

}
reverseDigits(userNumber);