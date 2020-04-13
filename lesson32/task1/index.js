const getValueWithDelay = (value, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(value);
            resolve(value)
        }, delay);
    });
};
// const asyncNum1 = getValueWithDelay("d", 1000);
// const asyncNum2 = getValueWithDelay('44', 2000);
// const asyncNum3 = getValueWithDelay(10, 3000);

const getSum = nums => nums
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0)
const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(nums => getSum(nums))
        .catch(() => Promise.reject(new Error('Can\'t calculate')))
};
asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(result => console.log(result));

export { asyncSum };