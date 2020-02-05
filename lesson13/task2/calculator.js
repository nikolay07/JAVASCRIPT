export const getSquaredArray = (arr) =>
    arr.map(num => num * num);


export const getOddNumbers = (numbers) =>
    numbers.filter(num => (num % 2 === 1));

export default (num1, num2) => num1 + num2;