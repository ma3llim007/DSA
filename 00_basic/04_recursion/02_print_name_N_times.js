function recusionFun(i, n) {
    if (i > n) return;
    console.log("Sameer");
    recusionFun(i + 1, n)
}


function main() {
    let n = 4
    recusionFun(1, n);
}

main();