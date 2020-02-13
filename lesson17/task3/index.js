/*Переадресация вызова. Создать функцию, которая будет откладывать вызов на указанное количество времени*/
export function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
};