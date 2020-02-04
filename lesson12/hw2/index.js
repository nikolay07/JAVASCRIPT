const arr = [' 1.9 ', '16.4', 17, ' 1 dollar '];

function cleanTransactionsList(arr) {
    return arr
        .filter((a) => isFinite(a))
        .map((a) => '$' + (+a).toFixed(2));
}
console.log(cleanTransactionsList(arr));
console.log(arr);

/*
Очистка данных о транзакциях

*/