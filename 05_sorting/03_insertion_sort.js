function insertion_sort(array, n) {
    for (let i = 0; i <= n - 1; i++) {
        j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            let temp = array[j-1];
            array[j - 1] = array[j];
            array[j] = temp;
            j--;
        }
    }
    return array;
}

function main() {
    let array = [13, 46, 24, 52, 20, 9];
    let n = array.length;
    const insertionSortObj = insertion_sort(array, n);
    console.log(insertionSortObj);
}
main();