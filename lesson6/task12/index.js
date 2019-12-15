function cloneArr(arr) {
    let newArray = [];

    //if (Array.isArray(arr)) {
    // newArray = arr.slice(0);
    for (let i of arr) {
        newArray[i] = cloneArr(newArray[i]);
    }
    return newArray;
    //}
}

/*
Клон массива
 Напишите функцию cloneArr(arr), которая будет клонировать входящий массив и возвращать новый массив.
*/