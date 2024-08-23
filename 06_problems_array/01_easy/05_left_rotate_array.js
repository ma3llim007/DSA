// Left Rotate the Array by One

// 01 BRUTE FORCE APPROACH
const bruteForceApproach = (array) => {
    let tempArray = new Array(array.length);
    for (let i = 1; i < array.length; i++) {
        tempArray[i - 1] = array[i];
    }
    tempArray[array.length - 1] = array[0];
    return tempArray;
    /*
        TIME COMPLEXITY :- O(N)
        SPACE COMPLEXITY :- O(N)
    */
}

// 2. OPTIMAL APPROACH
const optimalApproach = (array) => {
    let temp = array[0];
    for (let i = 1; i < array.length; i++){
        array[i - 1] = array[i];
    }
    array[array.length - 1] = temp;
    return array;

    /*
        TIME COMPLEXITY :- O(N)
        SPACE COMPLEXITY :- O(1)
    */
}

const main = () => {
    const array = [1, 2, 3, 4, 5];
    // console.log(`${array} Left Rotate the Array by One Is:- ${bruteForceApproach(array)}`);
    console.log(`${array} Left Rotate the Array by One Is:- ${optimalApproach(array)}`);
}
main();