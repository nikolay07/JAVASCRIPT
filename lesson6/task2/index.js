function getSum(sumNumbers) {
    let someOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        someOfNumbers += numbers[i];
        if (!Array.isArray(sumNumbers)) {
            return null;
        }
        return someOfNumbers;
    }
}


/*
Найдите сумму элементов массива
 
Создайте функцию getSum, которая будет принимать массив чисел и врнет сумму всех элементов

Основные требования:
Функция должна называться getSum
Функция должна принимать массив чисел как аргумент
>Функция должна вернуть сумму всех элементов массива
Функция должна вернуть null, если в качестве аргумента передан не массив */