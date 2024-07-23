/*
    PROBLEM STATEMENT
    A school has following rules for grading sytem
    a. below 25 = fail
    b. 25 to 44 - E
    c. 45 to 49 - D
    d. 50 to 59 - C
    e. 60 to 79 - B
    f. 80 to 100 - A
    Ask User to enter marks and prints the correspnonding grade
*/

const readLineSync = require("readline-sync");
let marks = parseInt(readLineSync.question("Enter The Marks:- "));

if (marks >= 25 && marks <= 44) {
    console.log("E");
}
else if (marks >= 45 && marks <= 49) {
    console.log("D");
}
else if (marks >= 50 && marks <= 59) {
    console.log("C");
}
else if (marks >= 60 && marks <= 79) {
    console.log("B");
}
else if (marks >= 80 && marks <= 100) {
    console.log("A");
}
else {
    console.log("F");
}