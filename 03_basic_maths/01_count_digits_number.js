function countDigitsNumber(n) {
    let count = 0;
    while (n > 0) {
        count = count + 1;
        n = Math.floor(n / 10);
    }
    return count;
}

function main() {
    let num = 12345;
    let funObj = countDigitsNumber(num);
    console.log(`The number ${num} has ${funObj} digits.`);
}


main();