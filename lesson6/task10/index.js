function withdraw(clients, balances, client, amount) {
    let newBalance = balances[clients.indexOf(client)] - amount;
    return newBalance >= 0 ? newBalance : -1
}

/*
Withdraw
Примитивный метод:
     let newBalance = 0;
    for (let i of clients) {
        if (clients[i] === client) {
            newBalance = i;
        }
    }
    for (let j in balances) {
        if (newBalance == j) {
            return balances[j] >= amount ? (balances[j] - amount) : -1
        }
    }

*/