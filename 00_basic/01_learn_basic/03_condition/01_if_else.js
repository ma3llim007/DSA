const readLineSync = require("readline-sync");

let age = readLineSync.question("Enter Your Age:- ");

if (age>=18) {
    console.log("You Are An Adult!");
} else {
    console.log("You Are Not An Adult!");
}