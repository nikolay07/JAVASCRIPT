export const anyncCalculator = num => new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value:${num}`);
            resolve(num);
        }, 3000);
    })
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value:${result}`);
            resolve(result);
        }, 3000);
    }))
    .then(value => {
        const result = value * 2;
        console.log(`Doubled value:${result}`);
        resolve(result);
    });
anyncCalculator(5).then(value => console.log(value));