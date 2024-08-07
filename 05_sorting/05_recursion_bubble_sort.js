function recursion_bubble_sort(array, n) {
    if (n === 1) return;
    let count = 0;
    for (let j = 0; j <= n - 2; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
            count = 1;
        }
    }
    if (count === 0) return;

    recursion_bubble_sort(array, n - 1);
}




function main() {
    let array = [13, 46, 24, 52, 20, 9];
    let n = array.length;

    recursion_bubble_sort(array, n)
    console.log(array);
}
main();