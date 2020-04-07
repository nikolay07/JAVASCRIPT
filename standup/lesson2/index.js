const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const func1 = num => {
    function func2(numbers) {
        for (let i = 0; i <= num; i++) {
            numbers += getRandomNum(1, 100);
        }
        return numbers;
    }
    return func2(0);
}
console.log(func1(2));



function sum() {
    return [...arguments]

}
console.log(sum('audi'));

let car = ['audi', 'bmww'];
let newCar = car.filter(elem => elem.substr(0, 1) == 'a');
console.log(newCar);

let cars = car.map(elem => elem[0].toUpperCase() + elem.slice(1));
console.log(cars);


// Task 1. Перша функція приймає число, яке є кількістю випадково згенерованих чисел в діапазоні від 0 до 100, Друга функція приймає ці числа і знаходить їх суму.

let palindrom1 = 'anNa';

let palindrom = str => {
    let isPalindrom = [...str].reverse().join('').toLowerCase();

    return isPalindrom === str.toLowerCase() ? true : false;
}
console.log(palindrom(palindrom1));
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
[
    ['a', 1],
    ['b', 2]
];
let c = Object.fromEntries(a.map((elem, index) => { return [elem, b[index]] }))
console.log(c);