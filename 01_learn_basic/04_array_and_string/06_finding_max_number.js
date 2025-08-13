const array = [20, 80, 10, 60, 300];
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log(max);
