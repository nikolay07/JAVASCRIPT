/*Обертка-шпион. Создание функции-обертки, запоминающая все аргументы вызова обернутой функции.*/
export function spy(func) {
    getWrapper.calls = [];

    function getWrapper(...args) {
        getWrapper.calls.push(args);
        return func.apply(this, args);
    }
    return getWrapper;
};