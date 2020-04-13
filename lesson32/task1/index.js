const getValueWithDelay = (value, delay) =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, delay));

const asyncNum1 = getValueWithDelay(undefined, 1000);
const asyncNum2 = getValueWithDelay(43, 2000);
const asyncNum3 = getValueWithDelay('20', 3000);

const getSum = numbers =>
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, rec) => acc + Number(rec), 0);

export const asyncSum = (...asyncNumbers) =>
    Promise.all(asyncNumbers)
    .then(num => getSum(num))
    .catch(() =>
        Promise.reject(new Error("Can\'t calculate")));

asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(result => console.log(result));