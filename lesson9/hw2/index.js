const rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
    ],
    room2: [
        { name: 'room2 name1' },
        { name: 'room2 name2' },
        { name: 'room2 name3' },
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
    ]
};

function getPeople(rooms) {

    const roomToArray = Object.values(rooms);
    const discloseArraysOfArr = roomToArray.flat()
    const arrListPeople = discloseArraysOfArr.map((a) => a.name);

    return arrListPeople;
}
console.log(getPeople(rooms))
    /*
    Преобразить объект в массив - part 2
    Нужно написать функцию, которая такой объект преобразует в массив имен жителей
    Основные требования:
    1. Функция с именем getPeople должна принимать объект в заданом выше формате
    2. Функция должна вернуть список имен пользователей в виде 
    массива(плоский массив строк['room1 name1', 'room1 name2', 'room2 name1', 'room3 name1']).
    3. Количество комнат и количество людей в комнате может быть любым.
    4. Пользуйтесь разнообразием методов массивов и объектов.Обычный цикл
     for для решения этой задачи подходит не лучшим образом.
     Решение.
     1.Выбираем с помощью Object.values значение всех ключей в отдельный массив.
     2.Сшиваем массив массивов в один массив.
     3. С помощью .map делаем запрос на значения в ключе name и в результате выводяться все значения встроку.
    */