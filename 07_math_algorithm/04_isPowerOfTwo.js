function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

// Big-O = O(logn)

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(50)); // false
