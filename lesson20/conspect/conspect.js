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
console.log(user1); //User {name: "Bob", age: 25}
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
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};
class Ship {
    name: 'Argo',
        startMachine() {
            console.log(`${this.name} lifting anchor up`);
            ship.move();
        }
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        ship.stop();
    }
};
Object.setPrototypeOf(ship, vehicle);