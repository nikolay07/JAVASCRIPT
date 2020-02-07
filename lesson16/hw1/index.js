export function createArrayOfFunctions(num) {
    let arr = [];
    if (typeof num !== 'number') { return null }
    if (!num) { return [] }

    for (let i = 0; i < num; i++) {
        arr[i] = function() {
            return i;
        }
    }
    return arr;
}
console.log(createArrayOfFunctions(9)[5]());

/*

Создайте фабрику массивов ф-ций :)
Основные требования:
1. Файл index.js должен експортировать ф-цию под именем createArrayOfFunctions
2. Ф-ция createArrayOfFunctions должна принимать целое число, как единственный аргумент. Это
число укажет размерность результирующего массива
3. Ф-ция должно вернуть массив заданной размерности, каждым элементом которого будет фция, которая возвращает свой индекс в массиве
4. Пример работы: createArrayOfFunctions(9)[5](); // 5
5. Если передано не число, нужно вернуть null
6. Если аргумент не передан, то вернуть пустой массив

*/