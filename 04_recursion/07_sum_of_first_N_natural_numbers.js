let readLineSync = require("readline-sync");
/*
    1. Sum Of first N Number Using Recursion
    => Approach's
        1. Parameter Approach
        2. Function Approach
*/

// 1. PARAMETER APPROACH
function ParameterApproach(i, sum) {
    if (i < 1) {
        console.log(sum);
        return
    }
    ParameterApproach(i - 1, sum + i);
}

// 2. Function Approach
function FunctionApproach(n) {
    if (n == 0) {
        return 0;
    }
    return n + FunctionApproach(n - 1);
}

function main() {
    let n = Number(readLineSync.question("Enter The N Number:- "));
    const FunctionOutput = FunctionApproach(n);
    console.log(FunctionOutput);
}
main();