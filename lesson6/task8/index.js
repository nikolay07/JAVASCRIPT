function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let uniqueArr = [];
    for (let i of array) {
        if (uniqueArr.indexOf(i) < 0) {
            uniqueArr.push(i)
        }
    }
    return uniqueArr.length > 0 ? uniqueArr.length : null;
}

//array[i]
/*
Нахождение уникальных
 Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. 
 Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. 
 Длина массива > 0

Сигнатура - uniqueCount(array)

*/