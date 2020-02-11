export const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
export const ship = {
    name: 'Argo',
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