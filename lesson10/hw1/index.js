const arr = [12, 15.5348, 16.5788]

function getTotalPrice(arr) {
    const sum = arr.reduce((a, b) => a + b);
    return '$' + (Math.floor(sum * 100) / 100);;
}
console.log(getTotalPrice(arr));


/*Сумма дробных чисел
 */