//Классы в JavaScript

//КЛАССЫ 

function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function(age) {
    if (age < 0) { return false; }
    this.age = age;
    if (age >= 25) { this.requestNewPhoto() }
    return age;
};
const user = new User('John', 26);
//написать более современно

class User { // синтаксический сахар для функций-конструкторов
    constructor(name, age) { // ключевое слово
            this.name = name;
            this.age = age;
        }
        //сравним пользователей по возрасту
        //статические методы есть только у классов, у  экземляров их нету
    static compare(user1, user2) {
        return user1.age - user2.age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(age) {
        if (age < 0) { return false; }
        this.age = age;
        if (age >= 25) { this.requestNewPhoto() }
        return age;
    }
}
const user1 = new User('Bob', 25);
const user2 = new User('Tom', 19);
console.log(user1); //User {name: "Bob", age: 25}
console.log(user2); //User {name: "Tom", age: 19}
console.log(User.compare); // ƒ compare (user1, user2){  return user1.age - user2.age;}
console.log(User.compare(user1, user2)); //6
________________________________________________________
// Применение класов для наследования
//так записывать не рекомендуется:
const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
export const ship = {
    haswhells: false,
    name: 'Chaika',
    liftAnchorUp() {
        console.log(`${this.name} lifting anchor up`);
    },
    liftAnchorDown() {
        console.log(`${this.name} lifting anchor down`);
    },
    startMachine() {
        this.liftAnchorDown()
        this.move();
    },
    stopMachine() {
        this.liftAnchorDown()
        this.stop();
    },
};
Object.setPrototypeOf(ship, vehicle);

//переделываем в классы
class Vehicle {
    constructor(name, hasWhells) {
        this.name = name;
        this.hasWhells = hasWhells;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};
class Ship extends Vehicle { //расширяет 
    constructor(name, speed) {
        super(name, false); //super - это ссылка на конструктор родительского класса Vehicle
        this.speed = speed; // this не сработает, пока мы не вызовем через super конструктор родительского класса
    }
    startMachine() {
            this.move();
            console.log(`${this.name} lifting anchor up`);

        }
        /* можем расширить метод move родителя так
        move () {
        super.move();
        console.log(`${this.name} lifting anchor up`);
        }
        */
    stopMachine() {
            this.stop();
            console.log(`${this.name} lifting anchor down`);

        }
        /* можем расширить метод stop родителя так
        stop () {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
        }
        */
};
const ship1 = new Ship('Aurora', 17);
console.log(ship1); //Ship {name: "Aurora", hasWhells: false, speed: 17}
ship1.startMachine(); //Aurora is moving Aurora lifting anchor up
________________________________________________________
//Wallet - защищенность (_), приватность (#)
//защищенные методы по договоренности обозначают одинарным нижним _
// приватные - # и это часть языка
class Walllet {
    constructor() {
            this._balance = 0;
        }
        // можно записать _balance = 0;
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enouhg funds');
            return;
        }
        return this._balance -= amount;
    }
}
const wallet1 = new Wallet1();
console.log(wallet1.getBalance()); //0
wallet1.deposit(45); // пополним кошелек на 45
console.log(wallet1.getBalance()); //45
wallet1.withdraw(34); //снимеме деньги 34
console.log(wallet1.getBalance()); //11
wallet1.withdraw(134); //снимеме больше денег
console.log(wallet1.getBalance()); //No enouhg funds
console.log(wallet1._balance); // 11 - все равно есть доступ.
/*если поставить впреди #balance, тогда он будет действительно защищенным. Но многие браузеры еще не поддерживают.
console.log(wallet1.#balance); ничего не выведет
*/