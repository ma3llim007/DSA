/*
    17. Alpha Hill Pattern
     A     
    ABA    
   ABCBA   
  ABCDCBA  
 ABCDEDCBA 
ABCDEFEDCBA
*/
function seventeenPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        // let Char = 
        for (let j = 0; j < n - i + 1; j++) {
            row += ' ';
        }
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(65 + j);
        }
        for (let k = i - 1; k >= 0; k--) {
            row += String.fromCharCode(65 + k);
        }
        for (let j = 0; j < n - i + 1; j++) {
            row += ' ';
        }
        console.log(row);
    }
}
seventeenPattern(6)