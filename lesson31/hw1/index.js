const successPromise = new Promise(resolve => {
    resolve(32);
});

/*
 * исправьте цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
    .then(number => {
        const halfNumber = number / 2;
        return halfNumber;
    })
    .then(number => {
        /* fix this handler */
        const squaredNumber = number * number;
        return squaredNumber;
    })
    .then(result => {
        console.log(result); // 256
    });

/*
 * исправьте цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
    .then(number => {
        /* fix this handler */
        const tenNumber = number * 10;
        return tenNumber;
    })
    .then(result => {
        console.log(result); // 320
    });

console.log('!!! Обратите внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!');