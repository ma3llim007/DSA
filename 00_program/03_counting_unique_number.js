/*
    Count Unique Number
    [1,1,2,2,3,4,4,5,6,7,8,8]
    OUTPUT: 8


    CONDITION
    i=0 for storeding the value of Number
    j=1 for looping
    Check array of i to j
*/

// First Approach
function Count_Unique(array) {
    if (array.length) {
        let i = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
    } else {
        throw new Error("Array Is Empty");
    }
}
const Count_UniqueObj = Count_Unique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8,9,9]);
console.log(Count_UniqueObj);