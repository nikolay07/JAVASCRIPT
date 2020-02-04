function superRound(num, n) {
    const index = Math.pow(10, n);
    return [
        Math.floor(num * index) / index,
        Math.round(num * index) / index,
        Math.ceil(num * index) / index,
        Math.trunc(num * index) / index,
        Number(num.toFixed(n))
    ]
}
console.log(superRound(1.456, 2));