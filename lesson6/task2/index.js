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

/*
Найдите сумму элементов массива
 
 */