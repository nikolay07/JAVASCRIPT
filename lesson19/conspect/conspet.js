//Прототипы. Наследование.//
//venicle and ship
const vehicle = {
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
const ship = {
    name: 'Aurora',
    hasWheels: false,
    liftAncorDown() {
        console.log('lift ancor down');
    },
    liftAncorUp() {
        console.log('lift ancor up');
    },
    //__proto__: vehicle, //vehicle прототип для ship и он может пользоваться его методами - это гетр и сетр для внутреннего свойства [Prototype]. Так лучше не устанавливать прототипы
};
//ship.move() // moving - использовал методами vehicle
Object.setPrototypeOf(ship, vehicle); // способ установки прототипа
ship.move() //Aurora move
______________________________________________________________
const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() { // get указывает что это гетр
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) { // set указывает что это сетр
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
}
console.log(user.fullName); // John Doe
user.fullName = 'Tom Hardy';
console.log(user.fullName); // Tom Hardy
// можно использовать и обычный метод, а не гетр и сетр - setFullName(value) и вызвать их как метод - user.setFullName = ('Tom Hardy').
______________________________________________________________
// own props - собственные свойства
const vehicle = {
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
const ship = {
    name: 'Aurora',
    hasWheels: false,
    liftAncorDown() {
        console.log('lift ancor down');
    },
    liftAncorUp() {
        console.log('lift ancor up');
    },
};
Object.setPrototypeOf(ship, vehicle);

for (let prop in ship) {
    console.log(prop); // выведет все свойства - свои и унаследованные
}

for (let prop in ship) {
    if (ship.hasOwnProperty(prop)) {
        console.log(prop); // выведет только свои свойства
    }
}
//или более новый метод
console.log(Object.keys(ship)); // выведет только свои свойства
______________________________________________________________ //User
// Функции конструкторы - любая функция, кроме стрелочной. ЕЕ название с большой буквы - договоренность
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }

}
const user1 = new User('Tom', 17); // ключевое слово new
console.log(user1); // User {name: 'Tom', age: 17} - вызывает заполненый объект
user1.sayHi(); //Hi, I am Tom

const user2 = new User('Bob', 21);
console.log(user2); // User {name: 'Bob', age: 21}
user2.sayHi(); //Hi, I am Bob
console.log(user2.sayHi === user1.sayHi); // false - при каждом вызове мы создаем новую функцию-конструктор

//механизм оптимизации - методы однотипных объектов скидывать в прототип
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function() { // экономим память prototype - это свойство, куда  мы складываем все методы которые потом один раз будут подарены экземпляру
    console.log(`Hi, I am ${this.name}`);
}
const user1 = new User('Tom', 17);
const user2 = new User('Bob', 21);
console.log(user2.sayHi === user1.sayHi); // true