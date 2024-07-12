const readLineSync = require("readline-sync");
let userDayInput = readLineSync.question("Enter The Day:- "); 
const StringToArray = userDayInput.split(" ");
let ArrayList = StringToArray.map(Number);
console.log(ArrayList)