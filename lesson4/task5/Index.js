const m = 3;
const n = 16;
let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 2 === 0 && i % 4 > 0) {
        result += i;
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;
    } else if (i % 5 === 0) {
        console.log(i)
    }
    continue

};
console.log(result);


/*
Примените матемаческие операции к числам от m до n

Создайте цикл, который в зависимости от кратности числа будет применять к нему разные математические операции. Число целое от m до n
Основные требования:
Объявите переменную m, которая содержит целое число больше нуля
Объявите переменную n, которая содержит целое число больше m и <= 50
m и n не должны меняться в процессе работы программы
Граничные числа m и n должны включаться в рассчет
Результат должен храниться в переменной result
Если число кратно 2 но не кратно 4, то прибавьте его к результату
Если число кратно 3, то отнимите его от результата
Если число кратно 4, то умножте его на результат
Если число кратно 5, то просто выведите в консоль это число и не изменяйте результат
Если число не попадает под условия выше, то пропускаем его
Начальное значение для вычислений возьмите 0

*/