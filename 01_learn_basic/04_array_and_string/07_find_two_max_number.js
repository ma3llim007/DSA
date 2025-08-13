const arr = [10, 30, 56, 43, 29, 64, 49, 60];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    } else if (arr[i] > sMax && max !== arr[i]) {
        sMax = arr[i];
    }
}

console.log(max);
console.log(sMax);
