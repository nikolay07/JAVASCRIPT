function getSpecialNumbers(m, n) {
    let allNumbers = [];
    for (let i = m; i <= n; i++) {
        if (m % 3 == 0) {
            allNumbers.push(i);
        }
        return allNumbers;
    }
}

/*  
Найдите эллементы массива, которые деляться на 3 без остатка
Создайте функцию getSpecialNumbers, которая вернет массив всех чисел кратных 3 из промежутка от m до n

Основные требования:
Функция должна называться getSpecialNumbers
Функция должна принимать 2 целых числа в качестве аргументов m и n
>Функция должна вернуть массив, который содержит числа, кратные 3 из заданного промежутка

*/