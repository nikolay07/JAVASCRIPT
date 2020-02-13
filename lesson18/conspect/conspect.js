/*Функции: Контекст выполнения - part 2*/
//event (this in arrow functions)
// ВАЖНО включать строгий режим первой строчкой!
'use strict'

const obj = {
    name: 'Tom',
    sayHi() {
        console.log(this.name);
    },
};
obj.sayHi(); // Tom

const func = obj.sayHi;
func(); // пустая строка - потеря контекста(при использовании 'use strict' - undefined)

var a = 1;
console.log(window.a); // 1 (создает глобальное свойство - может засорить глобальный объект)

let b = 2;
console.log(window.b); //undefined
// для создания своства глобального объекта лучше писать так
window.user = {
    name: 'Tom',
    age: '16',
};
//----------------------------------------------------
'use strict'
console.log(this); // выведет window

function func() {
    console.log(this);
}
func(); // underfined
//----------------------------------------------------
'use strict'

const user = {
    name: 'Tom',
    sayHi() {
        console.log(this);
    },
};
const func = user.sayHi;
func(); // underfined
setTimeout(user.sayHi, 100); // window - вылет на глобальный объект
setTimeout(() => user.sayHi(), 100); // {name: "Tom", sayHi: ƒ}
________________________________________________________
//This в callback
    'use strict'
const event = {
    guests: [
        { name: 'Tom', email: 't@gmail.com', age: 17 },
        { name: 'Bob', email: 'b@gmail.com', age: 18 }
    ],
    message: 'Welcome to party',
    getInvintations() {
        return this.guests
            .filter(({ age }) => age >= 18) // нужно использовать стрелочную фунцию! 
            .map(({ name, email }) => ({
                text: `Hi ${name}. ${this.message}`,
                email
            }));
    }
}
console.log(event.getInvintations());
// [{…}]
// 0:
// text: "Hi Bob. Welcome to party"
// email: "b@gmail.com"
________________________________________________________
//wallet - Заимстование 
const wallet = {
    transactions: [1, 5, 89, 337, 3],
    getMax() {
        return Math.max(...this.transactions) // или Math.max.apply(null, this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions) //или Math.min.apply(null, this.transactions)
    }
};
console.log(wallet.getMax()); //337
console.log(wallet.getMin()); //1
________________________________________________________
//Псевдо массивы - pseudo arrays
function func() {
    console.log(arguments);

}
func(1, 2, 3, 4) //Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ] - но это ОБЪЕКТ!
    //--------------------------------------------------
function argSum() {
    return [...arguments].reduce((acc, el) => { return acc + el }, 0);
    // другой вариант return [].reduce.apply(arguments, [(acc, el) => { return acc + el }, 0]) или return [].reduce.call(arguments, (acc, el) => { return acc + el }, 0);
}
console.log(argSum(1, 2, 3, 4)); //10