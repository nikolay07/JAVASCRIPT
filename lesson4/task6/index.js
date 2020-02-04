const n = 1000;
let sum = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
        console.log('Found');
        sum += i;
    };
};
if (sum * 5 > 5000) {
    console.log('Bigger');
}
if (sum * 5 <= 5000) {
    console.log('Smaller or equal');
}

/* 
Нахождение нечетных и их количетсво
*/