const maxFibonacci = (num) => {
    if (num <= 0) return;

    return num
};
console.log(maxFibonacci(19));

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(8));

// Основные требования:
// 1. Экспортируйте из файла ф-цию maxFibonacci, которая принимает аргументом целое число больше нуля
// 2. Ф-ция maxFibonacci должна вернуть наибольшее число Фибоначчи, которое не больше заданного в аргументе
// 3. Пример работы maxFibonacci(15); // 13 или maxFibonacci(8); // 8