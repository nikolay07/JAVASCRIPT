let sum = 0;
const n = 1000;
for (let i = 0; i <= n; i++) {
    sum += i;
}
let man = Math.trunc(sum / 1234);
let honey = sum % 1234;
let result = man > honey ? true : false;
console.log(result)

/*Сравнение целых и остатков

*/