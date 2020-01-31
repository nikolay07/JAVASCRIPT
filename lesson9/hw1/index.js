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
    const copyObj = Object.assign({}, object)
    const objectToArray = Object.entries(copyObj)
    const addIdValue = objectToArray.map((a) => ({ id: a[0], ...copyObj[a[0]] }))
    const sortArrayOfObjects = addIdValue.sort((a, b) => a.age - b.age)
    return sortArrayOfObjects;
}
console.log(getCustomersList(object));

/*

Преобразить объект в массив - part 1
Нужно написать функцию, которая такой объект преобразует в массив и отсортирует
пользователей по возрасту от самого младшего до старшего
Основные требования:
1. Функция с именем getCustomersList должна принимать объект в заданом выше формате
2. Функция должна вернуть список пользователей в виде массива, отсортированного по возрасту
по возрастанию.
3. Элементы итогового массива должны включать поле id, значением которого является ключ из
исходного объекта.
Решаем.
1.Скопировать объект в новый объект
2.Перевести массив в объект.
3.На каждом проходе добавить  id: a[0] из реструктурированого скопированого объекта ...copyObj[a[0]] и заворачиваем его в объект {}.
4. Отсортировать массив объекта по значению age.

*/