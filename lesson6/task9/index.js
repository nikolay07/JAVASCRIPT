function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let newArray = [];
    for (let i of array) {
        if (!newArray.includes(i) > 0) {
            newArray.push(i);
        }
    }
    return newArray;

}





/*Удаление дубликатов
Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0
Сигнатура - removeDuplicates(array)
*/