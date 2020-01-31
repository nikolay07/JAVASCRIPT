const object = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Bob',
        age: 33
    },
};

function getCustomersList(object) {

    const copyObject = Object.assign({}, object)
    const valueObject = Object.values(copyObject)
    const sortedArray = valueObject.sort((a, b) => { return a.age - b.age })
    return sortedArray;
}
console.log(getCustomersList(object));

/*

Преобразить объект в массив - part 1

Данные о пользвателях храняться в виде объекта в формате
 const customers = {
 'customer-id-1': {
 name: 'William',
 age: 54
 },
 'customer-id-2': {
 name: 'Tom',
 age: 17
 },
 ...
 };
Нужно написать функцию, которая такой объект преобразует в массив и отсортирует
пользователей по возрасту от самого младшего до старшего
Основные требования:
1. Функция с именем getCustomersList должна принимать объект в заданом выше формате
2. Функция должна вернуть список пользователей в виде массива, отсортированного по возрасту
по возрастанию.
3. Элементы итогового массива должны включать поле id, значением которого является ключ из
исходного объекта

*/