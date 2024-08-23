// 1. BRUTE FORCE APPROACH - SORTING ARRAY THEN CHECK THE TWO LARGEST VALUE AND RETURN SECOND LAST VALUE *** (N LOG N + N) ***
const bruteForceApproach = (array) => {
    if (array.length ===0 || array.length ===1) {
        console.log(-1 +" "+ -1);
        return
    }
    array.sort((a, b) => a - b);
    let secondLarger = array[array.length - 2];
    console.log(`Second Largest: ${secondLarger}`);
}

// 2. BETTER
function betterApproach(array) {
    let largerNum = array[0];
    let secondNum = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largerNum) {
            largerNum = array[i]
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] > secondNum && array[j] !== largerNum) {
            secondNum = array[j];
        }
    }
    return secondNum;
}

// 3. OPTIMAL APPROACH
function optimalApproach(array) {
    let larger = array[0];
    let secondLarger = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > larger) {
            secondLarger = larger;
            larger = array[i]
        }
        else if (array[i] < larger && array[i] > secondLarger) {
            secondLarger = array[i];
        }
    }
    return secondLarger
}

function main() {
    let array = [1, 2, 4, 6, 7, 5];
    bruteForceApproach(array);

    const funcObj = optimalApproach(array)
    // console.log(`The Second Largest Number Is:- ${funcObj}`);
}
main()