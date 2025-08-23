function InsertionSort(array, n) {
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}
let array = [10, 5, 1, 12, 3];
let n = array.length;

InsertionSort(array, n);
console.log(array);
