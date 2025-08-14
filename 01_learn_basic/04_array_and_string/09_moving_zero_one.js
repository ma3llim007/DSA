let arr = [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0];

function moveZeroOne(arr) {
    let i = 0,
        j = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
}

let arr2 = [1, 2, 5, 78, -5, -4, -6, -4, -45, -47, 5, 4, 7, 38, 9, 44];
function moveNegativeAndPostiveValue(arr) {
    let i = 0,
        j = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
}
moveNegativeAndPostiveValue(arr2)
console.log(arr2);
