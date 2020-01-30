function checker(arr) {
    let sum = Math.max(...arr) + Math.min(...arr);
    return sum > 1000 ? true : false;
}


/*
Мин/макс массива
 Напишите функцию checker(arr), которая будет суммировать макс и мин элементы массива, 
 и возвращать true если сумма больше 1000, и false в другом случае.
 Примитивный метод:
let max = arr[0];
let min = max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < max) {
            min = arr[i];
        }
    }
 */