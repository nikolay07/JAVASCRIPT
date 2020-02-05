export const calc = expression => {
    if (typeof expression !== 'string') {
        return null;
    }

    let [a, operation, b] = expression.split(' ');
    let result;
    a = +a;
    b = +b;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }

    return `${expression} = ${result}`;
};

/*
Тест калькулятора
Напишите тесты на функцию calc, которая находиться в редакторе ниже. Она должна находиться
в файле calculator.js
Основные требования:
1. Проверьте, что работает каждая из операций + - * /
2. Проверьте, что ф-ция правильно отрабатывает, если передана не строка
3. Тесты и код должны быть в разных файлах
P.S. В этом задании присутствует только базовая проверка кода, для детальной проверки
вышлите ссылку на ваше решение ментору в чате
*/