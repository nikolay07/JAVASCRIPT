function reverseArray(arr) {
    let newArray = arr.reverse()
    return !Array.isArray(arr) ? null : newArray;
}
/* Переверните массив

Примитивный метод:
let newArray = []
    for (let i of arr) {
        newArray.unshift(i);
    }
    return newArray;
*/