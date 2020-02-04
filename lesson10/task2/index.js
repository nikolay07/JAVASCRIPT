const arr = [];

function getParsedIntegers(arr) {
    return arr.map((a) => Number.parseInt(a))
}

function getParsedIntegersV2(arr) {
    return arr.map((a) => parseInt(a))
}

function getParsedFloats(arr) {
    return arr.map((a) => Number.parseFloat(a))
}

function getParsedFloatsV2(arr) {
    return arr.map((a) => parseFloat(a))
}

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));

console.log(arr);



/*
Парсинг чисел

const arr = [4, 5.6, ' 5.7kl', null, Infinity, undefined];
*/