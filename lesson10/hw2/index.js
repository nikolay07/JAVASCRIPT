const arr = []
let length = arr.length;

function getRandomNumbers(length, min, max) {
    if ((Math.round(max) === Math.round(min) && (max - min < 1)) || length <= 0 || max < min) {
        return null;
    }
    let defaultArr = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.trunc(Math.random() * (max - min) + min);
        defaultArr[i] = randomNum;
    }

    return defaultArr;
}
console.log(getRandomNumbers(10, 1.21, 16.5))

/* 
Массив случайных чисел

Создайте функцию, которая будет возвращать массив целых случайных чисел из заданного
промежутка
Основные требования:
1. Функция должна называться getRandomNumbers
2. Функция должна принимать 3 аргумента:
1. число (целое) - длину результирующего массива
2. число (может быть дробное, положительное и отрицательное) - начало промежутка
3. число (может быть дробное, положительное и отрицательное) - конец промежутка,больше
начала промежутка
3. Функция должна вернуть массив заданой длины, элементы которого - целые случайные числа
в заданном промежутке


Найти целые числа isIntegers.

*/