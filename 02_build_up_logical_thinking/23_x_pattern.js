/*
    23. X Pattern
    X   X
     X X 
      X  
     X X 
    X   X
*/

function threePattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * n - 1; j++) {
            if (i + j === 2 * n || i === j) {
                process.stdout.write("X");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
threePattern(5);
