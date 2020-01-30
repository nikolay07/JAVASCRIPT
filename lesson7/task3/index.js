const flatArray = array => array.reduce((a, b) => {
    return a.concat(b);
}, []);
const newArr = [
    [1, 2],
    [3, 4, 5],
    [6, 7]
];

/*
Плоский массив
 
Создайте функцию flatArray, которая будет принимать массив, элементами которого могут быть одномерные массивы и преобразует его в плоский массив

Основные требования:
Функция должна называться flatArray
Исходный массив может содержать массивы в качестве элементов
Функция должна создать плоский массив из исходного массива
Исходный массив не должен измениться
Более раскрытый код:

Метод .reduce - сумирует
let num = [1, 2, 3, 4]
const sumNum = num.reduce((a,b) => a + b)  // 10

Метод .concat - сшивает массивы в один одномерный
let arr = [1, 2, 3, 4]
let anotherArr = [7, 8, 9]
const sumArr = arr.concat(anotherArr) // [1, 2, 3, 4, 7, 8, 9]

console.log (sumArr)
const flatArray = array => {
    const flatArray = array.reduce((acc, elem) => {
    return acc.concat(elem);}, []);
    return flatArray;
}
или 
const flatArray = array => array.flat(); метод новый использовать с коррекцией
*/