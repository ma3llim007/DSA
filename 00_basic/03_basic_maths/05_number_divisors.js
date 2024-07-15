let readLineSync = require("readline-sync");
let userInput = readLineSync.question("Enter The Number:- ");

for (let i = 0; i <= userInput; i++) {
    if (userInput % i == 0) {
        console.log(i);
    }
}