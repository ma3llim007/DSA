// 1. BRUTE FORCE APPROACH - SORTING ARRAY AND PRINTING ARRAY LAST NUMBER
const bruteForceApproach = (array) => {
    array.sort((a, b) => (a - b));
    return array[array.length - 1];
}
// 2. RECURSIVE APPROACH
function largestElemnt(array) {
    let larger = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= larger) {
            larger = array[i];
        }
    }
    return larger;
}

function main() {
    let array = [1, 2, 3, 99,4, 5, 9, 45, 12, 89, ];
    const funInstance = largestElemnt(array);
    // console.log(`The Largest Number In Array Is:- ${funInstance}`);
    console.log(`The Largest Number In Array Is:- ${bruteForceApproach(array)}`);
    
}
main()