function squareArray(numbers) {
    let arrNumbers = numbers.map((a) => a * a);
    return !Array.isArray(numbers) ? null : arrNumbers;
}
/*
Возведение в квадрат элементов массива

Создайте функцию squareArray, которая будет принимать массив чисел и возвращать массив с числами 
возведенными в квадрат

Основные требования:
Функция должна называться squareArray
Функция должна вернуть null, если в качестве аргумента передан не массив
Если аргумент - массив, то функция должна вернуть массив, где каждый элемент возведен в квадрат
Исходный массив не должен поменяться
Примитивный метод:
    const arrNumbers = [];
    for (let i of numbers) {
        arrNumbers.push(i * i);
    }
    return arrNumbers;
*/