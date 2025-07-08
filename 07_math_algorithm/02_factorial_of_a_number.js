const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
};

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(3));
// console.log(factorial(5));


// Big-0 = O(n)