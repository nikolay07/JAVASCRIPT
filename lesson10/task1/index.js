const numbers = []

function getFiniteNumbers(numbers) {
    return numbers.slice().filter(a => Number.isFinite(a))
}


function getFiniteNumbersV2(numbers) {
    return numbers.slice().filter((a) => isFinite(a));
}


function getNaN(numbers) {
    return numbers.slice().filter((a) => Number.isNaN(a))

}


function getNaNV2(numbers) {
    return numbers.slice().filter((a) => isNaN(a))
}


function getIntegers(numbers) {
    return numbers.slice().filter((a) => Number.isInteger(a))
}

console.log(getFiniteNumbers(numbers))
console.log(getFiniteNumbersV2(numbers))
console.log(getNaN(numbers))
console.log(getNaNV2(numbers))
console.log(getIntegers(numbers))

console.log(numbers)

/*
Проверка чисел

//numbers = [NaN, 10.1, 11, '17', 7, 'text', -'87', 0, '14.5']
*/