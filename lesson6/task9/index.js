function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let newArray = [];
    for (let i of array) {
        if (newArray.indexOf(i) < 0) {
            newArray.push(i);
        }
    }
    return newArray.length > 0 ? newArray : null;

}

/*
или 
    for (let i of array) {
        if (!newArray.includes(i)) {
            newArray.push(i);
        }

Удаление дубликатов
Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0
Сигнатура - removeDuplicates(array)
*/