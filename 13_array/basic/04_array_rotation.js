const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

// Using reverse Function - O(n) time, O(1) space - BEST
const leftRotation = (arr) => {
    reverse(arr, 0, arr.length - 1);
    return arr;
};