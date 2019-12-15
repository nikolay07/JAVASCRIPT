function cloneArr(arr) {
    //let newArray = [];
    if (!Array.isArray(array)) {
        return null;
    }
    let newArray = arr.slice();
    for (let i of arr) {
        newArray[i] = cloneArr(newArray[i]);
    }
    return newArray;

}

/*
Клон массива
 Напишите функцию cloneArr(arr), которая будет клонировать входящий массив и возвращать новый массив.
*/