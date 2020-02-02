const numbers = []

function getFiniteNumbers(numbers) {
    return numbers.slice().filter(a => Number.isFinite(a))
}


function getFiniteNumbersV2(numbers) {
    return numbers.slice().filter((a) => isFinite(a));
}


function getNaN(numbers) {
    return numbers.slice().filter((a) => Number.isNaN(a))

}


function getNaNV2(numbers) {
    return numbers.slice().filter((a) => isNaN(a))
}


function getIntegers(numbers) {
    return numbers.slice().filter((a) => Number.isInteger(a))
}

console.log(getFiniteNumbers(numbers))
console.log(getFiniteNumbersV2(numbers))
console.log(getNaN(numbers))
console.log(getNaNV2(numbers))
console.log(getIntegers(numbers))

console.log(numbers)

/*
Проверка чисел

Создайте функции, которые будут искать указанные числа в массиве
Основные требования:
1. Функция с названием getFiniteNumbers должна отбросить все элементы исходного массива,
которые не являются конечными числами. Для проверки должна использовать метод
Number.isFinite
2. Функция с названием getFiniteNumbersV2 должна отбросить все элементы исходного массива,
которые не являются конечными числами. Для проверки должна использовать метод isFinite
3. Функция с названием getNaN должна вернуть все элементы исходного массива, которые
имеют значение NaN. Для проверки должна использовать метод Number.isNaN
4. Функция с названием getNaNV2 должна вернуть все элементы исходного массива, которые
имеют значение NaN. Для проверки должна использовать метод isNaN
5. Функция с названием getIntegers должна отбросить все элементы исходного массива, которые
не являются целыми числами. Для проверки должна использовать метод
6. Во всех ф-циях исходный массив должен оставаться неизменным
7. Сравните результаты работы методов Number.isNaN vs isNaN и Number.isFinite vs isFinite

//numbers = [NaN, 10.1, 11, '17', 7, 'text', -'87', 0, '14.5']
*/