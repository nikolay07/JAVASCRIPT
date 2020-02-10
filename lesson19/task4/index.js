export function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
}
User.prototype.setAge = function() {
    this.age = age;
    if (age >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
    }
    if (age < 0) { return false };
    return age;

}
const user = new User('John', 26);
/*
Основные требования:
1. Конструктор должен экспортироваться под именем User
2. User должен принимать и сохранять name и age при создании объекта
3. На прототипе User должен иметь метод sayHi, который выводит в консоль текст Hi, I am John,
где John - свойство name объекта
4. На прототипе User должен иметь метод requestNewPhoto, который выводит в консоль текст
New photo request was sent for John, где John - свойство name объекта
5. На прототипе User должен иметь метод setAge, который установит новое значение свойству
age и выведет в консоль текст New photo request was sent for John, где John - свойство name
объекта, если новый возраст больше или равен 25
6. Метод setAge должен вернуть false и прекратить выполнение, если переданное значение
меньше нуля
7. Метод setAge должен вернуть переданное значение, если переданное значение не меньше
нуля*/