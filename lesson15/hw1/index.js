export function createCalculator() {
    let number = 0;

    function add(num) {
        return number += num;
    };

    function decrease(num) {
        return number -= num;
    };

    function reset() {
        return number = 0;
    };

    function getMemo() {
        return number;
    };
    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}
const addNumber = createCalculator();
const addNumber1 = createCalculator();
console.log(addNumber.add(5))
console.log(addNumber.decrease(5))
console.log(addNumber.reset(5))
console.log(addNumber.getMemo(5))
console.log(addNumber1.add(15))
console.log(addNumber1.reset())
console.log(addNumber1.getMemo())