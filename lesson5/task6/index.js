function getPrimes(n) {
    let simpleNumber = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 1 === 0 || i % i === 0) {
            simpleNumber++;
        }
        console.log(simpleNumber);
    }

}