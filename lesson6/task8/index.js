function uniqueCount(array) {
    let uniqueArr = [];
    for (let i of array) {
        if (uniqueArr.indexOf(i) < 0) {
            uniqueArr.push(i)
        }
    }
    return uniqueArr.length > 0 ? uniqueArr.length : null;
}

/*
indexOf(i) ищет i и возвращает его индекс или -1, если ничего не найдено.
includes(i) – возвращает true, если в массиве имеется элемент i, в противном случае false.
   еще вариант
    for (i of array){
        if (!newArr.includes(i)){ //
            newArr.push(i)
        }
    }
    

Нахождение уникальных
 Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. 
 Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. 
 Длина массива > 0

Сигнатура - uniqueCount(array)

*/