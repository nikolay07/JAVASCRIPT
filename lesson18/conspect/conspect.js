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
//----------------------------------------------------

const event = {
    guests: [{
        name: 'Tom'
    }]
}