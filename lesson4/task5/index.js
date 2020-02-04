const m = 3;
const n = 16;
let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 2 === 0 && i % 4 !== 0) {
        result += i;
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;
    }
    if (i % 5 === 0) {
        console.log(i);
    }
    continue;

};



/*
Примените матемаческие операции к числам от m до n

*/