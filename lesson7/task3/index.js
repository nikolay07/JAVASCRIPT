const flatArray = array => array.reduce((num1, num2) => {
    return num1.concat(num2);
}, []);
const newArr = [
    [1, 2],
    [3, 4, 5],
    [6, 7]
];