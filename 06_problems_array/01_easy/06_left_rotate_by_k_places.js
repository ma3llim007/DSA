// Left rotate an array by K places

// 01 BRUTE FORCE APPROACH
const bruteForceApproach = (array, d) => {
    d = d % array.length;

    // Getting Values
    let temp = [];
    for (let i = 0; i < d; i++) {
        temp[i] = array[i];
    }

    // Shifting Rest Of Values
    for (let i = d; i < array.length; i++) {
        array[i - d] = array[i];
    }

    // Joining Both Array
    for (let i = array.length - d; i < array.length; i++) {
        array[i] = temp[i - (array.length - d)];
    }
    console.log(array);
    
    // console.log(array.concat(temp))
};

// 02 Reverse Fucntion
function reverse(arr, start, end) {
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// 02 OPTIMAL APPROACH
const optimalApproach = (array, k) => {
    let n = array.length - 1;
    k = k % n;
    reverse(array, 0, k - 1);
    reverse(array, k, n);
    reverse(array, 0, n);
    console.log(array);
};

const main = () => {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let d = 2;
    // bruteForceApproach(array, d);
    optimalApproach(array, d);
};
main();
