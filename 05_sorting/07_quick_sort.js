function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function qs(arr, low, high) {
    if (low < high) {
        let Index = partition(arr, low, high);
        qs(arr, low, Index - 1);
        qs(arr, Index + 1, high);
    }
}


function quickSort(arr, n) {
    qs(arr, 0, n);
    return arr;
}

function main() {
    let arr = [4, 6, 2, 5, 7, 9, 1, 3];
    let n = arr.length - 1;
    arr = quickSort(arr, n)
    console.log(arr);

}

main();