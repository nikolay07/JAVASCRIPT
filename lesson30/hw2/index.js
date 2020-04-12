/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise
 */

const successPromise = new Promise(resolve => {
    resolve(67)
        /* ...code here */
});

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

successPromise.then(function onSuccess(number) {
    console.log(Math.pow(number, 2));
    /* ...code here */
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
successPromise.catch(function onError() {
    /* ...code here */
    console.log('I am an error');
});