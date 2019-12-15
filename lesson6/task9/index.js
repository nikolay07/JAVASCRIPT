function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let newArray = [];
    for (let i of array) {
        if (!newArray.includes(array[i]) < 0) {
            newArray.push(array[i])
        }
    }
    return newArray.length > 0 ? newArray.length : null;

}





/*Удаление дубликатов
Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0
Сигнатура - removeDuplicates(array)
*/