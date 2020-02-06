let number = 0;

export function add(num) {
    return number += num;
};

export function decrease(num) {
    return number -= num;
};

export function reset(num) {
    return number = 0;
};

export function getMemo(num) {
    return number;
};

/*

Калькулятор с памятью

Создайте ф-ции, которые будут изменять число и запоминать результат
Основные требования:
1. В памяти по умолчанию должен храниться 0
2. Функция с именем add должна принимать число и суммировать его с тем, что в памяти
3. Функция с именем decrease должна принимать число и отнять его от того, что в памяти
4. Функция с именем reset должна сбрасывать память (устанавливать 0)
5. Функция с именем getMemo должна вернуть число в памяти
6. Функции add, decrease, reset, getMemo должны экспортироваться под своими именами из
файла index.js


*/