let count = 0;
function Func() {
    if (count === 5) return;
    console.log(count);
    count = count + 1;
    Func();
}
Func();