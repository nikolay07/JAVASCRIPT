const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создайте промис и присвойте переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */
export const resultPromise = /* ...code here */

    resultPromise
    .then(numbersList => {
        console.log(numbersList);
        const sum = numbersList.reduce((acc, num) => acc + num, 0);
        return sum;
    })
    .then(result => {
        console.log(result); // 98
    });