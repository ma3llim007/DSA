const arr = [10, 30, 56, 43, 29, 64, 49, 60];
function reverse_array_with_extra_space(arr) {
    let temp = new Array(arr.length);
    let index = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        temp[index] = arr[i];
        index++;
    }

    return temp;
}

function reverse_array(arr) {
    let i = 0,
        j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }

    console.log(arr);
}

reverse_array(arr);
