let strNew = 'aa bb cc';
let strSearch = 'aa'

function countOccurrences(strNew, strSearch) {
    return strSearch.length === 0 ? null : strNew.split(strSearch).length - 1;
}
console.log(countOccurrences(strNew, strSearch));


/*
Количество вхождений подстроки в строку

*/