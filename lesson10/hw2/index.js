function getRandomNumbers(length, min, max) {
    if (Math.ceil(max) === Math.ceil(min) && max < min && length < 1 && defaultArr.length > length) {
        return null
    }
    const defaultArr = []
    for (let i = min; i < length; i++) {
        { defaultArr.push(Math.floor(Math.random() * (max - min + 1)) + min) }
    }
    return defaultArr;
}
console.log(getRandomNumbers(length, min, max));


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