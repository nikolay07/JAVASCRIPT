const withdraw = (clients, balances, client, amount) => {
    let newBalance = balances[clients.indexOf(client)] - amount;
    return newBalance >= 0 ? newBalance : -1
};