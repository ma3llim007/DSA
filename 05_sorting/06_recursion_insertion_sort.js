function recurion_insertion_srot(array,i, n) {
    if (i === n) return;
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        j--;
    }
    recurion_insertion_srot(array, i + 1, n);
}

function main() {
    let array = [13, 46, 24, 52, 20, 9];
    let n = array.length;
    recurion_insertion_srot(array, 0,n);
    console.log(array);
}
main();