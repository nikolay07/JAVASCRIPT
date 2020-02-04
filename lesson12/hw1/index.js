let str = 'nikolay';

function reverseString(str) {
    if (typeof str !== 'string') { return null; }
    return str.split('').reverse().join('');
}
console.log(reverseString(str));
/*

Reverse String

Напишите функцию, которая будет "переворачивать строку"
Основные требования:
1. Функция должна называться reverseString
2. Функция должна принимать как аргумент строку
3. Функция должна вернуть строку, где символы будут идти в обратном порядке
4. Функция должна вернуть null, если пердана не строка
*/