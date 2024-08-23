// Right rotate an array by K places

// 01 BRUTE FORCE APPROACH
const bruteForceApproach = (array, d) => {
    d = d % array.length;

    let temp = [];
    for (let i = array.length - d; i < array.length; i++) {
        temp[i - (array.length - d)] = array[i];
    }
    for (let i = array.length - d - 1; i >= 0; i--) {
        array[i + d] = array[i];
    }
    for (let i = 0; i < d; i++) {
        array[i] = temp[i];
    }
    console.log(array);
};

function main() {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let d = 2;
    bruteForceApproach(array, d);
}
main();
