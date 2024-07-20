// Reverse An Array
const readSyncLine = require("readline-sync");
let temp;
const reverseArray = (array, start, end) => {
    if (start <= end) {
        temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        console.log(array);
        reverseArray(array, start + 1, end - 1);
    }
}

const main = () => {
    const input = readSyncLine.question("Enter The Array:- ");
    const array = input.split(" ").map(item => Number(item));
    const start = 0;
    const end = array.length - 1;
    reverseArray(array, start, end);
    console.log(array);
}

main()