const transformToObject = arr => {
    let obj = {};
    arr.forEach(element => {
        obj[element] = element;
    })
    return obj
}
const arr = ['a', 17.1, 'John Doe'];
const result = transformToObject(arr);


/* Создание объектов
 */