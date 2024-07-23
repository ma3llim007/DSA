/*
    08. Inverted Star Pyramid Pattern
***********
 *********
  *******
   ***** 
    ***    
     *
*/

function eightPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += ' ';
        }
        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
            row += '*'
        }
        for (let j = 0; j < i; j++) {
            row += ' ';
        }
        console.log(row);
    }
}
eightPattern(5)