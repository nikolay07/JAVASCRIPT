export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static createEmpty() {
        return new User('', null);
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
console.log(User.createEmpty()); //User {name: '', age: null}

/*Конструктор объектов

 */