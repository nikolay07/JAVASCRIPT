const user = {
    name: 'John Doe',
    age: 17,
    interest: 'football'
}
const user1 = {};

const concatProps = obj => {
    let arr = [];
    for (let key in obj) {
        arr = arr.concat(obj[key]);
    }
    return arr;
}
console.log(concatProps(user));
console.log(concatProps(user1));

/*
Перебор свойств объектов
 
Создайте функцию, которая складывает все значения свойств объектов в массив

Основные требования:
Функция с именем concatProps должна принимать объект, как единственный аргумент
Функция должна достать все значения свойств объекта и сложить их 
в одну строку ({ name: 'John Doe', age: 17, interest: 'football' } => ['John Doe', 17, 'football'])
Для пустого объекта ф-ция должна вернуть пустой массив
*/