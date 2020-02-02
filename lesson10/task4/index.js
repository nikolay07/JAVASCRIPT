const arr = []

function getMaxAbsoluteNumber(arr) {
    const absolute = arr.map((a) => Math.abs(a))
    const max = Math.max(...absolute)
    return (Array.isArray(arr) && arr.length !== 0) ? max : null;

}
console.log(getMaxAbsoluteNumber(arr));

/*
Поиск максимального числа

Создайте функцию, которая будет возвращать максимальное по модулю число
Основные требования:
1. Функция должна называться getMaxAbsoluteNumber
2. Функция должна принимать массив чисел (могут быть дробные, отрицательные и
положительные) как единственный аргумент
3. Функция должна вернуть максимальное по модулю число
4. Пример работы: [-777, 3, -1, 45, -20] => 777
5. Если передан не массив, или пустой массив, то вернуть null

*/