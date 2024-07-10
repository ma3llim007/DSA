// CHECKING SUM ZERO - PROBLEM 1
// [-5,-4,-3,-2,0,2,4,6,8]

// FIND OUT THE FIRST PAIR OF SUM FROM ARRAY THE OUTPUT SHOULD BE ZERO

// First Approaches
let Array = [-5, -4, -3, -2, 0, 2, 4, 6, 8]
function GetSumZero(array) {
    for (let num of array) {
        console.log("outerLoop");
        for (let j = 1; j < array.length; j++) {
            console.log("innerLoop");
            if (num + array[j] === 0) {
                console.log([num, array[j]]);
            }
        }
    }
}
// GetSumZero(Array)

// Second Approaches
function GetSumZero2(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        sum = array[left] + array[right];
        if (sum == 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}
const FunCall = GetSumZero2(Array);
console.log(FunCall);