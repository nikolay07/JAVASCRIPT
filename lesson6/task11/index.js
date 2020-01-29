function checker(arr) {
    let sum = Math.max(...arr) + Math.min(...arr);
    return sum > 1000 ? true : false;
}


/*
Мин/макс массива
 Напишите функцию checker(arr), которая будет суммировать макс и мин элементы массив, 
 и возвращать true если сумма больше 1000, и false в другом случае.
 */