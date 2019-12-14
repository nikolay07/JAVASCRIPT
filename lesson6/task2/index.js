//const numbers = [1, 2, 3, 4, 5];

function getSum(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let someOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        someOfNumbers += numbers[i];
    }
    return someOfNumbers;

}

//const sumOfElements = getSum(numbers);
//console.log(sumOfElements);
/*
Найдите сумму элементов массива
 
Создайте функцию getSum, которая будет принимать массив чисел и врнет сумму всех элементов
Основные требования:
Функция должна называться getSum
Функция должна принимать массив чисел как аргумент
>Функция должна вернуть сумму всех элементов массива
Функция должна вернуть null, если в качестве аргумента передан не массив */