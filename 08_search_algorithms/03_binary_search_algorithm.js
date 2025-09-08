const numbers = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];
const target = 67;

const binarySearch = (arr, target) => {
    let first = 0,
        last = arr.length - 1;

    while (first <= last) {
        // let mid = Math.floor((first + last) / 2);
        let mid = first + (last - first) / 2;  // this is fast and recommended to use in program
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) last = mid - 1;
        else first = mid + 1;
    }
    return -1;
};

const binarySearchObj = binarySearch(numbers, target);
console.log(binarySearchObj);
