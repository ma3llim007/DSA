let rows = 3;
let cols = 3;
let dynamicArray = [];

for (let i = 0; i < rows; i++) {
    dynamicArray[i] = [];
    for (let j = 0; j < cols; j++) {
        dynamicArray[i][j] = i * cols + j + 1;
    }
}

console.log(dynamicArray);