// Remove Duplicates in-place from Sorted Array

// 01 BRUTE FORCE APPROACH
const bruteForceApproach = (array) => {
    let set = new Set(array);
    let setArray = Array.from(set);
    return setArray;
}

// 02 Optimal Approach
const optimalApproach = (array) => {
    let i = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}

const main = () => {
    let array = [1, 1, 2, 2, 3, 3, 3];
    const bruteForceApproachInst = bruteForceApproach(array);
    // console.log(bruteForceApproachInst);
    const optimalApproachIns = optimalApproach(array);
    console.log("The array after removing duplicate elements is:");
    for (let i = 0; i < optimalApproachIns; i++) {
        console.log(array[i]);
    }
    
    
}
main()