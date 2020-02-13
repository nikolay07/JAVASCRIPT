/*Корабль. Наследование поведения передвижения.*/
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
ship1.stop(); //Aurora stopped1 Aurora lifting anchor up