const dayTransactions = [
    { currency: 'USD', amount: 60, operation: 'sell' },
    { currency: 'EUR', amount: 160, operation: 'buy' },
    { currency: 'EUR', amount: 90, operation: 'sell' },
];

// const getTotalBalance = transactionsList => {
//     const transactions = transactionsList.reduce((acc, curr) => {
//         const { currency, operation, amount } = curr;
//         acc[currency] = acc[currency] || 0;
//         operation === 'buy' ? acc[currency] += amount : acc[currency] -= amount
//         return acc;
//     }, {});
//     return transactions;
// };
// const result = getTotalBalance(dayTransactions);
// console.log(getTotalBalance(dayTransactions));


const con = (obj) => obj.reduce((acc, curr) => {
    const { currency, operation, amount } = curr;
    return {...acc, [currency]: (acc[currency] || 0) + (amount * (operation === 'buy' ? -1 : 1)) }
}, {})
console.log(con(dayTransactions));