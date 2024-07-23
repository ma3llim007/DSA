/*
    PROBLEM STATEMENT
    Print Day As Per The Number By Using Switch
    a. 1 => Monday
    b. 2 => Tuesday
    c. 3 => Wednesday
    d. 4 => Thursday
    e. 5 => Firday
    f. 6 => Saturday
    g. 7 => Sunday
    Ask User to enter Day Number and prints the correspnonding grade
*/
const readLineSync = require("readline-sync");
let userDayInput = parseInt(readLineSync.question("Enter The Day:- "));

switch (userDayInput) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Firday");
        break; 
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Value Entered");
        break;
}