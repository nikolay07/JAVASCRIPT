let str = 'asdfgdfkjgdgldfg'
let num = 5;

function splitString(str, num = 10) {
    if (typeof str !== 'string') { return null }
    let arr = [];
    let start = 0;
    while (true) {
        let part = str.substr(start, num);
        if (part.length === 0) {
            break;
        } else if (part.length < num) {
            part = part + '.'.repeat(num - part.length);
        }
        arr.push(part);
        start += num;

    }

    return arr;

}
console.log(splitString(str, num));


/*
Разбить строку на подстроки
Напишите ф-цию, которая разделит входящую строку на строки с указанным к-вом символов и
вернет их в виде массива
Основные требования:
1. Функция должна называться splitString
2. Функция должна принимать строку в первом аргументе и число во втором
3. Число во втором аргументе должно указывать, сколько символов будет в каждой подстроке
4. Функция должна вернуть массив, содержащий подстроки
5. Последняя подстрока должна быть дополнена точками . до нужного к-ва символов
6. Пример работы ф-ции: splitString('abcd efgh', 4) => ['abcd', ' efg', 'h...']
7. Функция должна вернуть null, если в первом аргументе не строка
8. функция должна делить на подстроки длиной 10 символов, если не задан второй аргумент

*/