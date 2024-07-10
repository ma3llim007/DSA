const readlineSync = require('readline-sync');
let input = readlineSync.question('Enter Your First Number:- ');
let input2 = readlineSync.question('Enter Your Second Number:- ');
let total;
const sum =(val1, val2)=>{
    total = parseInt(val1) + parseInt(val2);
    console.log("Sum Of Two Number Are:- " + total);
}

sum(input,input2)