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
    
     Решение.
     1.Выбираем с помощью Object.values значение всех ключей в отдельный массив.
     2.Сшиваем массив массивов в один массив.
     3. С помощью .map делаем запрос на значения в ключе name и в результате выводяться все значения встроку.
    */