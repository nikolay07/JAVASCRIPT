function getPrimes(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 1 === 0 || i % i === 0)
            console.log(i)
    }
}