function squareArray(numbers) {
    let arrNumbers = numbers.map((a) => a * a);
    return !Array.isArray(numbers) ? null : arrNumbers;
}
/*
Возведение в квадрат элементов массива
Примитивный метод:
    const arrNumbers = [];
    for (let i of numbers) {
        arrNumbers.push(i * i);
    }
    return arrNumbers;
*/