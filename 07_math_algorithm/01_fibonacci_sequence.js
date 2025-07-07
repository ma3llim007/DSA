// First Approch
function fibonacciFirstApproach(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Second Approch
function fibonacciSecondApproach(n) {
    const fib = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            fib.push(i);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}

console.log(fibonacciSecondApproach(2));
console.log(fibonacciSecondApproach(5));
console.log(fibonacciSecondApproach(7));
