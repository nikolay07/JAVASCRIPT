const m = 16;
const n = 25;
let man = m;
let note = n;
let result = 1;
while (man <= note) {
    if (man % 2 === 1) {
        result *= man;

    }
    man++;
}
console.log("Result: ", result)

/*
Посчитать произведение всех нечетных чисел от m до n

Создайте цикл, который посчитает произведение всех нечетных чисел от m до n включительно
Основные требования:
Объявите переменную m, которая содержит целое число больше нуля
Объявите переменную n, которая содержит целое число больше m
m и n не должны меняться в процкссе работы программы
Результат должен храниться в переменной result
*/