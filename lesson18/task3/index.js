/*Работа с псевдомассивами. Написать функцию, принимающую числа как аргументы и возвращает сумму квадратов этих чисел.*/
export function sumOfSquares() {
    return [...arguments].reduce((acc, el) => { return acc + el * el }, 0);
}
console.log(sumOfSquares(1, 2, 3, 4));