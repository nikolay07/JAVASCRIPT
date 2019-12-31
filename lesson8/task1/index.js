const transformToObject = arr => {
    let obj = {};
    arr.forEach(element => {
        obj[element] = element;
    })
    return obj
}
const arr = ['a', 17.1, 'John Doe'];
const arr1 = [];
const result = transformToObject(arr);
const result1 = transformToObject(arr1);

/* Создание объектов
 
Создайте функцию, которая входящий массив преобразует в объект

Основные требования:
Функция с именем transformToObject должна принимать массив, как единственный аргумент. 
Массив может содержать любые строки и числа.
Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны 
соответствующему элементу массива (['a', 17.1, 'John Doe'] => { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' })
Для пустого массива ф-ция должна вернуть пустой объект
*/