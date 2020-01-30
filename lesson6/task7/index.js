function sortAsc(array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let a = 0; a < array.length - 1 - i; a++) {
            if (array[a + 1] < array[a]) {
                let sortByAsc = array[a + 1];
                array[a + 1] = array[a];
                array[a] = sortByAsc;
            }
        }
    }
    return array;
}

function sortDesc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let b = 0; b < array.length - 1 - i; b++) {
            if (array[b + 1] > array[b]) {
                let sortByDesc = array[b + 1];
                array[b + 1] = array[b];
                array[b] = sortByDesc;
            }
        }
    }
    return array;
}

/*
Сортировка массива
 Напишите две функции, которые будут сортировать массив чисел в порядке возрастания и убывания соответственно. 
 Возвращаемое значение - отсортированный массив. Нельзя использовать стандартные методы массивов

Сигнатура методов: sortAsc(array), sortDesc(array)

P.S. Сортировку массива на практике с нуля пишут крайне мало, почти никогда. 
Написать ее с нуля для новичка тоже не простая задача. 
Поэтому в задании приемлемо если вы найдете решение в интернете, предварительно разберетесь в нем и проверите на сайте
С помощью методов:
function sortAsc(arr) {
    let sortedAsc = arr.slice().sort((a, b) => a - b);
    return !Array.isArray(arr) ? null : sortedAsc;
}

function sortDesk(arr) {
    let sortedDesk =  arr.slice().sort((a, b) => b - a)
    eturn !Array.isArray(arr) ? null : sortedDesk;
}

*/