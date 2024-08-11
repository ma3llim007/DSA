// Check if an Array is Sorted

// 01 BRUTE FORCE APPROACH
const bruteForceApproach = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++){
            if (array[j] < array[i]) {
                return false;
            }
        }
    }
    return true;
}

// 02 Optimal Approach
const optimalApproach = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i-1]) {
            return false;
        }        
    }
    return true;
}

const main = () => {
    let array = [3, 4, 5, 1, 2];
    // 01 BRUTE FORCE APPROACH
    const bruteForceIns = bruteForceApproach(array);
    if (bruteForceIns) console.log(`Given ${array} Is Sorted`);
    else console.log(`Given ${array} Is Not Sorted`);
    
    
}

const main2 = () => {
    let array = [3, 4, 5, 1, 2];
    // 02 Optimal Approach
    const optimalIns = optimalApproach(array);
    if (optimalIns) console.log(`Given ${array} Is Sorted`);
    else console.log(`Given ${array} Is Not Sorted`);
}
main2();