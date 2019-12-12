let m = 1;

function getPrimes(m, n) {
    for (let i = m; i <= n; i++)
        if (Number.isInteger(i) || i > 0) {
            if (i % 1 === 0 || i % i === 0) {
                console.log(i)
            }
        }
}