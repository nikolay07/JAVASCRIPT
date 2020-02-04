let strSearch = 'th'
let strNew = 'There thara there tham then';

function countOccurrences(strSearch, strNew) {
    if (strNew === '') { return null }
    let countOccurrence = (strNew.split(strSearch).length - 1);;
    return countOccurrence;
}
console.log(countOccurrences(strSearch, strNew));

/*
Количество вхождений подстроки в строку

Напишите ф-цию, которая найдет количество вхождений одной строки в другой
Основные требования:
1. Функция должна называться countOccurrences
2. Функция должна принимать строку в которой будет осуществляться поиск как первый аргумент
3. Вторым аргументом должна идти строка, которая будет предметом поиска
4. Функция должна вернуть число вхождений строки из второго аргумента в строке из первого
аргумента ф-ции
5. Если вторым аргументом передана пустая строка, то ф-ция должна вернуть null

*/