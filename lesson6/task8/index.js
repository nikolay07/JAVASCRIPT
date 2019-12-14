function uniqueCount(array) {
    if (array.length == 0) {
        return null;
    }
    if (!Array.isArray(array)) {
        return null;
    }
    let result = 0;
    let countUnique = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        countUnique++;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] == array[i]) {
                count++;
                break;
            }
        }
    }
    return result = countUnique - count;
}
/*
Нахождение уникальных
 Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. 
 Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. 
 Длина массива > 0

Сигнатура - uniqueCount(array)


*/