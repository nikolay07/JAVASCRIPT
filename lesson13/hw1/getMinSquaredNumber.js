export default (arr) => {
    if (arr.length === 0 || !Array.isArray(arr)) { return null }
    const modulOfNumbers = arr.map((a) => Math.abs(a));
    const minNumber = Math.min(...modulOfNumbers);
    const squareOfMinNumber = Math.pow(minNumber, 2);
    return squareOfMinNumber;
}

/*
Поиск наименьшего квадрата


*/