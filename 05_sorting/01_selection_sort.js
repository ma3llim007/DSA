function selection_sort(array, n) {
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
}

function main() {
    let array = [13, 46, 24, 52, 20, 9];
    let n = array.length;
    const result = selection_sort(array, n);
    console.log(result);
}

main();