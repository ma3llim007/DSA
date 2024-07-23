/*
    07. Star Pyramid Pattern
     *     
    ***    
   *****   
  *******  
 ********* 
***********
*/

function sevenPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n - i + 1; j++) {
            row += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            row += '*'
        }
        for (let j = 0; j < n - i + 1; j++) {
            row += ' ';
        }
        console.log(row);
    }
}
sevenPattern(5)