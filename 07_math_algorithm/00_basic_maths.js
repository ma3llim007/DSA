// calculate area and perimeter of rectangle
function rectangleAreaPerimeter(length, width) {
    const area = length * width;
    const perimeter = 2 * (length * width);
    return { area, perimeter };
}
// console.log(rectangleAreaPerimeter(5, 7));

// generate otp
function generateOtp() {
    const otp = Math.trunc(Math.random() * 9000 + 1000);
    return otp;
}
// generateOtp();

// area of triangle by heron's formula
function areaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
// console.log(areaOfTriangle(5, 4, 3));

// cicumference of circle
function cicumference(r) {
    return (2 * Math.PI * r).toFixed(2);
}
console.log(cicumference(4));
