/* simple function*/
function getSum(a, b) {
    console.log(a + b);
}
getSum(2, 3);
// Выведет число 5;

/* Function argument */
function sayHi(name) {
    const greeting = 'Hi, ' + name;
    console.log(greeting);
}
sayHi('John');
// Выведет: Hi, John

const prefix = 'Hi, ';

function sayHi(name) {
    const greeting = prefix + name;
    console.log(greeting);
}
sayHi('Ann');
// Выведет: Hi, Ann;
function sayHi(name) {
    console.log(argument);
    const greeting = prefix + name;
    console.log(greeting);
}
sayHi('Ann', 'Bob');
// Выведет: Hi, Ann; и выведет все аргументы;

function sayHi(name) {
    console.log(argument);
    const greeting = prefix + name;
    console.log(greeting);
}
sayHi();
// Выведет: Hi, undefind;

function sayHi(name = 'anonymus') { // 'anonymus'- Аргумент по умолчанию
    console.log(argument);
    const greeting = prefix + name;
    console.log(greeting);
}
sayHi();
// Выведет значение по умолчанию 'anonymus': Hi, anonymus;
function sayHi(name = 'anonymus') { // 'anonymus'- Аргумент по умолчанию
    console.log(argument);
    const greeting = prefix + name;
    console.log(greeting);
}
sayHi('Tom');
// Выведет: Hi, Tom; - значение по умолчанию 'anonymus' проигнорится

function sayHi(name, anotherName = 'anonymus') { // 'anonymus'- Аргумент по умолчанию
    console.log(argument);
    const greeting = prefix + name + ' and ' + anotherName;
    console.log(greeting);
}
sayHi('Tom');
//Выведет: Hi, Tom and anonymus;

function sayHi(name, anotherName = 'anonymus') { // 'anonymus'- Аргумент по умолчанию
    console.log(argument);
    const greeting = prefix + name + ' and ' + anotherName;
    console.log(greeting);
}
sayHi('Tom', 'Bob');
//Выведет: Hi, Tom and Bob;

// RETURN STATEMENT;
function getEvenOdd(num) {
    if (name % 2 === 0) {
        return 'even;'
    } else {
        return 'odd';
    }
};
getEvenOdd(17); //Выведет: odd

function getEvenOdd(num) {
    if (name % 2 === 0) { return 'even;' } else { return 'odd'; }
};
getEvenOdd(17);
const result = getEvenOdd(17);
console.log(result); //Выведет: odd;

function getSum(a, b) {
    return a + b;
};
const result = getSum(20, 5);
alert(result); //Выведет: 25;


const getSum = function(a, b) { // Анонимная функция;
    return a + b;
};
const result = getSum(20, 5);
alert(result); //Выведет: 25;

//ARROW FUNCTION
function getSquare(num) {
    return num * num;
}
const result = getSquare(5);
console.log(result) //Выведет: 25;

const getSquare1 = (num) => {
    return num * num;
}
const result = getSquare1(5);
console.log(result) //Выведет: 25;
    //Если один везде параметр можно указать так:
const getSquare1 = num => num * num; // Всегда анонимная, имя некуда указать
const result = getSquare1(5);
console.log(result) //Выведет: 25;