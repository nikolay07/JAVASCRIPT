export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
export const ship = {
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
    },
};
Object.setPrototypeOf(ship, vehicle);
ship.move();
ship.stop();
/*
Корабль - прототипы
 JAVASCRIPT  Урок 19. Прототипы. Наследование
Создайте корабль, который унаследует некоторое поведение средства передвижения
Основные требования:
1. Экспортируйте из файла 2 объекта с именами vehicle и ship
2. vehicle должен иметь метод move, который выводит в консоль текст Argo is moving, где Argo -
это свойство name объекта
3. vehicle должен иметь метод stop, который выводит в консоль текст Argo stopped, где Argo - это
свойство name объекта
4. ship должен наследовать все методы vehicle
5. ship должен иметь метод startMachine, который выводит в консоль текст Argo lifting anchor up,
где Argo - это свойство name объекта, а затем вызывает метод move объекта ship
6. ship должен иметь метод stopMachine, который вызывает метод stop объекта ship, а затем
выводит в консоль текст Argo lifting anchor down, где Argo - это свойство name объекта


*/