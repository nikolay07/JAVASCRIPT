function findDivCount(a, b, n) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (a % n == 0) sum += i;
    }
    return sum;
}

/*
Кратные на промежутке
Напишите функция которая на промежутке [a, b] будет находить количество чисел, которые кратны числу n
Сигнатура метода - findDivCount(a, b, n)

*/