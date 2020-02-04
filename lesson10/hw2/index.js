const arr = []
let length = arr.length;

function getRandomNumbers(length, min, max) {
    if ((Math.ceil(max) === Math.ceil(min) && (max - min < 1)) || length <= 0 || max < min) {
        return null;
    }
    let defaultArr = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.trunc(Math.random() * (max - min) + min);
        defaultArr[i] = randomNum;
    }

    return defaultArr;
}
console.log(getRandomNumbers(10, 1.21, 16.5))