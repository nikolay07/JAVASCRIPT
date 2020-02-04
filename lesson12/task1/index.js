function calc(str) {
    const [a, operator, b] = str.split(' ');
    let result = 0;
    switch (operator) {
        case '+':
            result = Number(a) + Number(b);
            break;
        case '-':
            result = Number(a) - Number(b);
            break;
        case '*':
            result = Number(a) * Number(b);
            break;
        case '/':
            result = Number(a) / Number(b);
            break;
    }
    return `${str} = ${result}`;
}
console.log(calc('5 * 6'));



/*Калькулятор

*/