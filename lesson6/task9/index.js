function removeDuplicates(array) {
    let newArray = [...new Set(array)]
    return newArray.length > 0 ? newArray : null;
}

/*
Удаление дубликатов
Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0
Сигнатура - removeDuplicates(array)
Примитивный метод:
let newArray = [];
for (let i of array) {
if (!newArray.includes(i)) {
        newArray.push(i);
    }
}
или  
let newArray = [];
for (let i of array) {
    if (newArray.indexOf(i) < 0) {
            newArray.push(i);
    }
}
*/