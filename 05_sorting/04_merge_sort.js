function merge(array, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (array[left] <= array[right]) {
            temp.push(array[left]);
            left++;
        } else {
            temp.push(array[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(array[left])
        left++;
    }

    while (right <= high) {
        temp.push(array[right])
        right++;
    }

    for (let i = low; i <= high; i++) {
        array[i] = temp[i - low];
    }
}

function merge_sort(array, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2)

    merge_sort(array, low, mid);
    merge_sort(array, mid + 1, high);

    merge(array, low, mid, high);

}


function main() {
    let arr = [4, 2, 1, 6, 7];
    let n = arr.length;

    console.log("Before Sorting Array:");
    console.log(arr);

    merge_sort(arr, 0, n - 1);

    console.log("After Sorting Array:");
    console.log(arr);
}
main()