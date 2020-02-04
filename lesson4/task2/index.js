const m = 16;
const n = 25;
let man = m;
let result = 1;
do {
    if (man % 2 === 1) {
        result *= man;
    }
    man++;
}
while (man <= n)
console.log('Result: ' + result);

/*
Посчитать произведение всех нечетных чисел от m до n
    
*/