function bubble_sort(array, n) {
    for (let i = n - 1; i >= 0; i--) {
        let swapCount = 0;
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
                swapCount = 1
            }
        }
        if (swapCount == 0) {
            return array
        }
    }
    return array;
}

function main() {
    let array = [13, 46, 24, 52, 20, 9];
    let n = array.length;
    const bubble_sortInstance = bubble_sort(array, n)
    console.log(bubble_sortInstance);
}

main();