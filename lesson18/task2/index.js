/*Заимствование метода. Написать функцию - кошелек, содержащий информацию о транзакциях и возможностью возвращать максимальную и минимальную транзакцию.*/
export const wallet = {
    transactions: [7, 19, 45, 67, 99],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    },
}
console.log(wallet.getMax());
console.log(wallet.getMin());