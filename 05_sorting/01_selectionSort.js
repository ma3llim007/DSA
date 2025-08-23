function selectionSort(array, n) {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[minIndex] > array[j]) minIndex = j;
        }

        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp
    }
}

let array = [10, 5, 1, 12, 3];
let n = array.length;

selectionSort(array, n);

console.log(array);
