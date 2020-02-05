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
*/