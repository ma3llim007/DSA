function discountCaluclate(amount) {
    let discountRate = 0;

    if (amount > 0 && amount <= 5000) {
        discountRate = 0;
    } else if (amount > 5000 && amount <= 7000) {
        discountRate = 5;
    } else if (amount > 7000 && amount <= 9000) {
        discountRate = 10;
    } else if (amount > 9000) {
        discountRate = 20;
    }
    const discount = Math.floor((discountRate * amount) / 100);
    const payable = amount - discount;

    return {
        discountRate: discountRate,
        discountAmount: discount,
        payableAmount: payable,
    };
}

console.log(discountCaluclate(9500));
