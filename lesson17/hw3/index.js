export const bind = (func, context, arguments) => {
    return function() {
        func.call(this, ...arguments);
    }
}
const question = {
    askWho() {
        console.log(`Who am I? ${this.context}!`);
    }
}
const bindAsk = bind(question.askWho);
bindAsk.call({ context: 'Function Bind' });

/*
Функция bind

С помощью методов функций call или apply опишите функцию bind(func, context, [arg1], [arg2], ...
[argn]), которая будет работать аналогично методу .bind функций
Основные требования:
1. Экспортируйте из файла функцию с именем bind
2. Для реализации bind используйте методы функций call или apply
3. Сигнатура bind(func, context, [arg1], [arg2]), где func - функция, к которой привязывается
контекст; context - контекст для новой функции; далее необязательные аргументы arg1, arg2 ...
для целевой функции func

*/