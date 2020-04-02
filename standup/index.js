const dayTransactions = [
    { currency: 'USD', amount: 60, operation: 'sell' },
    { currency: 'EUR', amount: 160, operation: 'buy' },
    { currency: 'EUR', amount: 90, operation: 'sell' },
];

function getTotalBalance(transactionsList) {
    const transactions = transactionsList.reduce((acc, curr) => {
        const { currency, operation, amount } = curr;
        acc[currency] = acc[currency] || 0;
        if (operation === 'buy') { acc[currency] += amount } else { acc[currency] -= amount }
        return acc;
    }, {});
    return transactions;
};
const result = getTotalBalance(dayTransactions);
console.log(getTotalBalance(dayTransactions));