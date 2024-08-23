// Move all Zeros to the end of the array

// 01 BRUTE FORCE APPROACH
const bruteForceApproach = (arr) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
    let tempSize = temp.length;
    for (let i = tempSize; i < arr.length; i++) {
        arr[i] = 0;
    }
    console.log(arr);
};

// 02 OPTIMAL APPROACH
const optimalApproach = (arr) => {
    let n = arr.length;
    let j = -1;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return arr;

    for (let i = j + 1; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    // return arr;
    console.log(arr);
};

const main = () => {
    let array = [1, 0, 2, 3, 0, 4, 0, 1];
    // bruteForceApproach(array);
    optimalApproach(array);
};
main();
