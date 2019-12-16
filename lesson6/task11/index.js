function checker(arr) {
    let min = 0;
    let max = 0;
    for (let i of arr) {
        if (i > max) {
            max = i;
        }
        if (i < min) {
            min = i;
        }
    }
    let sum = min + max;
    return sum > 1000 ? true : false;
}


/*
Мин/макс массива
 Напишите функцию checker(arr), которая будет суммировать макс и мин элементы массив, 
 и возвращать true если сумма больше 1000, и false в другом случае.
 */