function Closures() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const ClosuresObj = Closures();
console.log(ClosuresObj());
console.log(ClosuresObj());