function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArr.indexOf(array[i]) < 0) {
            uniqueArr.push(array[i])
        }
    }
    return uniqueArr.length > 0 ? uniqueArr.length : null;
}

/*
Нахождение уникальных
 Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. 
 Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. 
 Длина массива > 0

Сигнатура - uniqueCount(array)

*/