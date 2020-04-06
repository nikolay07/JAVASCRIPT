function calc(initValue) {
    let result = initValue;
    let calculator = {
        add(number) {
            result += number;
            return this;
        },
        subtract(number) {
            result -= number;
            return this;
        },
        mult(number) {
            result *= number;
            return this;
        },
        div(number) {
            result /= number;
            return this;
        },
        result() {
            return result;
        }

    }
    return calculator;
}
console.log(calc(12).add(3).subtract(5).div(2).result());
export { calc };