const dayTransactions = [
    { currency: 'USD', amount: 60, operation: 'sell' },
    { currency: 'EUR', amount: 160, operation: 'buy' },
    { currency: 'EUR', amount: 90, operation: 'sell' },
];

export function getTotalBalance(transactionsList) {
    const result = transactionsList.reduce((acc, curr) => {
        let currency = curr.currency;
        let operation = curr.operation;
        let amount = curr.amount;
        acc[currency] = acc[currency] || 0;
        if (operation === 'buy') { acc[currency] += amount } else { acc[currency] -= amount }
        return acc;
    }, {});
    return result;
}
getTotalBalance(dayTransactions)
    //console.log(getTotalBalance(dayTransactions));