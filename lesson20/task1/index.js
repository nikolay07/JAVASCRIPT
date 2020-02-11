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
console.log(User.createEmpty()); //User {name: '', age: ''}

/*Конструктор объектов
 JAVASCRIPT  Урок 20. Классы в JavaScript
Напишите конструктор, который будет создавать пользователей с определенными
возможностями
Основные требования:
1. Для решения этой задачи используйте классы
2. Конструктор должен экспортироваться под именем User
3. User должен принимать и сохранять name и age при создании объекта
4. На прототипе User должен иметь метод sayHi, который выводит в консоль текст Hi, I am John,
где John - свойство name объекта
5. На прототипе User должен иметь метод requestNewPhoto, который выводит в консоль текст
New photo request was sent for John, где John - свойство name объекта
6. На прототипе User должен иметь метод setAge, который установит новое значение свойству
age и выведет в консоль текст New photo request was sent for John, где John - свойство name
объекта, если новый возраст больше или равен 25
7. Метод setAge должен вернуть false и прекратить выполнение, если переданное значение
меньше нуля
8. Метод setAge должен вернуть переданное значение, если переданное значение не меньше
нуля
9. Статический метод createEmpty должен создавать юзера с пустыми полями
 */