//Методы объектов//

export const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() { //можно записывать без слова function;
        return (`${this.firstName} ${this.lastName}`) //this.firstName = user.firstName тоже самое;
    }
};
user.getFullName(); // выводит 'name lastName' - this сработает когда ссылаешся напрямую;
//если присвоить:
const func = user.getFullName();
func(); //выведет 'undefined undefined' - ПОТЕРЯ КОНТЕКСТ - this не сработал!
______________________________________________________
// метод .bind() - позволяет ;жестко привязать контекст this и дальше его поменять нельзя;
onst user = {
    firstName: 'Bob',
    getFullName() {
        return (`${this.firstName}`);
    }
};

const func = user.getFullName().bind(user);
func(); // выводит 'Bob' - this сработает

//можно менять также внутри объекта
const func = user.getFullName().bind({ firstName: 'Tom' });
func(); // выводит 'Tom'
______________________________________________________
const user1 = {
    name: 'Bob',
    sayHi(age, message) {
        console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
    }
};
const func = user.sayHi(17, 'Hello');
// Hello. I'm Bob. I'm 17 years old

const func = user.sayHi();
func(17, 'Hello');
// Hello. I'm . I'm 17 years old  -- контекст this потерян

//метод .call()
const func = user.sayHi();
func.call({ name: 'Tom' }, 17, 'Hello'); //Hello. I'm . I'm 17 years old -- принимает агументы через запятую;

//метод .apply()
const func = user.getFullName();
func.apply({ name: 'Tom', [17, 'Hello'] });
// Hello. I'm . I'm 17 years old -- принимает агументы в ввиде массива [];
______________________________________________________
// callbackPromt

const callbackPromt = {
    message: 'Tell me your number',
    showPromt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber); // выведет в консоль все что введешь в окно 'Tell me your number';
    },
    showDefferedPromt(ms) {
        setTimeout(this.showPromt, ms) // устанавливает задержку для вызова showPromt в ms
    }
};
callbackPromt.showDefferedPromt(1000); //выведет с задеркой 1000 ms в консоль тоб что введешь в окно 'This page says'  -- контекст из showPromt потерян;

// Вариант сохранение контекста
showDefferedPromt(ms) {
        setTimeout(() => this.showPromt(), ms)
    }
    //или
showDefferedPromt(ms) {
        setTimeout(this.showPromt.bind(this), ms)
    }
    //выведет с задеркой 1000 ms в консоль все что введешь в окно 'Tell me your number';
__________________________________________________
//defer - переадресация вызова

// ПРИМЕР "1"
function defer(func, ms) {
    return function() {
        setTimeout(func, ms);
    }
}
const sayHi = () => { //функция обертка
    console.log('Hi')
}
const deferredSayHi = defer(sayHi, 1000);
deferredSayHi(); //выведет в консоль 'Hi' с задеркой 1000ms;


// ПРИМЕР "2"
function defer(func, ms) {
    return function() {
        setTimeout(() => func(...arguments), ms);
    }
}
const sum = (a, b) => { //функция обертка
    console.log(a + b)
}
const deferredSum = defer(sum, 1000);
deferredSum(1, 4); //выведет в консоль NaN - нужно изменить setTimeout(() => func(...arguments), ms) - сработает и выведет в консоль 5;

// ПРИМЕР "3"
function defer(func, ms) {
    return function() {
        setTimeout(() => func(...arguments), ms);
    }
}
const user = {
    name: 'Tom';
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`);
    }
}
const deferredHi = defer(user.sayHi, 1000);
deferredHi(); //выведет в консоль 'Hi, I'm !' -- контекст утерян
//=>
const deferredHi = defer(user.sayHi.bind(user), 1000);
deferredHi() //выведет в консоль 'Hi, I'm Tom! - сработало.  Но .bind() жестко фиксирукт контекст и изменить мы ничего не сможем.

const deferredHi = defer(user.sayHi.bind(user), 1000);
deferredHi.call({ name: 'Bob' }); //выведет в консоль 'Hi, I'm Tom! -- не сработало
//=>

function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms); // setTimeout(() => func.call(this, ...arguments), ms)
    }
}
const user = {
    name: 'Tom';
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`);
    }
}
const deferredHi = defer(user.sayHi, 1000);
deferredHi.call({ name: 'Bob' }); //выведет в консоль 'Hi, I'm Bob!