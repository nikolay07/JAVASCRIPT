const add = {
    operation: '+',
};
const decrease = {
    operation: '-',
};
const divide = {
    operation: '/',
};
const multiply = {
    operation: '*',
};

export function calculator(a, b) {
    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
};
let a = 4;
let b = 7;

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
// ...your code here
export const multiplier = calculator.bind(multiply);
multiplier(a, b);
/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here
export const summator = calculator.bind(add);
summator(a, b);
/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here
export const twice = calculator.bind(multiply, 2);
twice(a);