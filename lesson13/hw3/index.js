export const getSum = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}

export const increaser = (a, index) => {
    if (a > index) {
        a += index
    }
    return a;
}

export const compareSums = (a, b, c, d) => {

    return sum(a, b) > sum(c, d) ? true : false;
}

function sum(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
}
export const findDivCount = (a, b, n) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % n == 0) sum++;
    }
    return sum;
}

export const squareArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.map(index => index * index);
}

export const reverseArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.slice().reverse();
}

export const pickProps = (obj, arr) => {
    const newObject = {};
    for (let i in obj) {
        if (arr.includes(i)) { newObject[i] = obj[i]; }
    }
    return newObject;
}

export const getAdults = (obj) => {
    let newObj = {};
    for (let i in obj) {
        if (obj[i] >= 18) newObj[i] = obj[i];
    }
    return newObj;
};