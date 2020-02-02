const number = 3.145;

function multiRound(number) {
    const floor = Math.floor(number);
    const round = Math.round(number);
    const ceil = Math.ceil(number);
    const trunc = Math.trunc(number);
    const toFixed = Number(number.toFixed(2));
    return [floor, round, ceil, trunc, toFixed]
}

console.log(multiRound(number));



/*
Округление чисел

Напишите ф-цию, которая разными методами будет округлять число до 2-х знаков после запятой
Основные требования:
1. Функция должна называться multiRound
2. Функция должнать принимать дробное число (может быть отрицательное и положительное)
как единственный аргумент
3. Ф-ция должна вернуть массив из 5-ти элементов:
1. Первый элемент - результат округления с помощью Math.floor
2. Первый элемент - результат округления с помощью Math.round
3. Первый элемент - результат округления с помощью Math.ceil
4. Первый элемент - результат округления с помощью Math.trunc
5. Первый элемент - результат округления с помощью .toFixed
4. Все элементы результирующего массива должны быть числами

*/