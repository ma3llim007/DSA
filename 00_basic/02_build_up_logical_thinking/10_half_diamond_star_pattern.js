/*
 10. Half Diamond Star Pattern
    *
    **
    *** 
    ****
    *****
    ******  
    *****
    ****
    ***    
    **
    *
*/
function tenPattern(n) {
    for (let i = 1; i <= 2 * n - 1; i++) {
        let stars = i
        let row = '';
        if (i > n) stars = 2 * n - i;
        for (let j = 1; j <= stars; j++) {
            row += '*'

        }
        console.log(row);
    }
}
tenPattern(4)