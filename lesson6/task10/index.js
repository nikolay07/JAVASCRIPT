function withdraw(clients, balances, client, amount) {
    let newBalance = balances[clients.indexOf(client)] - amount;
    return newBalance >= 0 ? newBalance : -1
}

/*
Withdraw

Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. 
Если денег на счете недостаточно метод будет возвращать -1
Считаем что в массиве clients хранятся имена клиентов, а в массиве balances - балансы их счетов соответственно. 
То есть у клиента по индексу 2 с массива clients, баланс счета - это значение по индексу 2 с массива balances
Сигнатура - withdraw(clients, balances, client, amount)
На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие)

*/