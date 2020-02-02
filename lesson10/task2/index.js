const arr = [];

function getParsedIntegers(arr) {
    return arr.map((a) => Number.parseInt(a))
}

function getParsedIntegersV2(arr) {
    return arr.map((a) => parseInt(a))
}

function getParsedFloats(arr) {
    return arr.map((a) => Number.parseFloat(a))
}

function getParsedFloatsV2(arr) {
    return arr.map((a) => parseFloat(a))
}

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));

console.log(arr);



/*
Парсинг чисел
Создайте функции, которые будут парсить числа в массиве
Основные требования:
1. Функция с названием getParsedIntegers должна каждый элемент массива привести к целому
чилому и вернуть их в виде массива. Для парсинга должен использоваться метод
Number.parseInt
2. Функция с названием getParsedIntegersV2 должна каждый элемент массива привести к целому
чилому и вернуть их в виде массива. Для парсинга должен использоваться метод parseInt
3. Функция с названием getParsedFloats должна каждый элемент массива привести к дробному
чилому и вернуть их в виде массива. Для парсинга должен использоваться метод
Number.parseFloat
4. Функция с названием getParsedFloatsV2 должна каждый элемент массива привести к
дробному чилому и вернуть их в виде массива. Для парсинга должен использоваться метод
parseFloat
5. Во всех ф-циях исходный массив должен оставаться неизменным
6. Сравните результаты работы методов Number.parseInt vs parseInt и Number.parseFloat vs
parseFloat
const arr = [4, 5.6, ' 5.7kl', null, Infinity, undefined];
*/