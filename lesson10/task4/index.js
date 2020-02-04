const arr = []

function getMaxAbsoluteNumber(arr) {
    if (!Array.isArray(arr) || (arr.length == 0)) { return null }

    const absolute = arr.map((a) => Math.abs(a))
    const max = Math.max(...absolute)
    return max;

}
console.log(getMaxAbsoluteNumber(arr));

/*
Поиск максимального числа
*/