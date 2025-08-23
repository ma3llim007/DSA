let array = [10, 5, 1, 12, 3];
let n = array.length;

function bubbleSort(array, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

bubbleSort(array, n);
console.log(array);
