export class Vehicle {
    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
}
export class Ship extends Vehicle {
    constructor(name, maxSpeed) {
        super(name, false);
        this.maxSpeed = maxSpeed;
    }
    move() {
        super.move();
        console.log(`${this.name} lifting anchor up`);
    }
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}
const ship1 = new Ship('Aurora', 17);
console.log(ship1); //Ship {name: "Aurora", hasWhells: false, speed: 17}
ship1.stop(); //Aurora is moving Aurora lifting anchor up
/*
Корабль

Создайте корабль, который унаследует некоторое поведение средства передвижения
Основные требования:
1. Экспортируйте из файла 2 класса с именами Vehicle и Ship
2. Vehicle должен хранить свойства name и numberOfWheels
3. Vehicle должен иметь метод move, который выводит в консоль текст Argo is moving, где Argo -
это свойство name объекта
4. Vehicle должен иметь метод stop, который выводит в консоль текст Argo stopped, где Argo - это
свойство name объекта
5. Ship должен наследоваться от Vehicle
6. Конструктор Ship принимает 3 аргумента name, numberOfWheels, maxSpeed
7. Ship должен иметь метод move, который выводит в консоль текст Argo lifting anchor up, где
Argo - это свойство name объекта, а затем вызывает метод move наследованный от Vehicle
8. Ship должен иметь метод stop, который вызывает метод stop наследованный от Vehicle, а
затем выводит в консоль текст Argo lifting anchor down, где Argo - это свойство name объекта
*/