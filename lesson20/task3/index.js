export class Wallet {
    constructor() {
        this._balance = 0;
    }
    getBalance() { return this._balance }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log(`No enough funds`);
            return;
        }
        return this._balance -= amount;
    }
}
const wallet1 = new Wallet();
console.log(wallet1.getBalance()); //0
wallet1.deposit(50); // пополним кошелек на 50
console.log(wallet1.getBalance()); //50
wallet1.withdraw(20); //снимем деньги 20
console.log(wallet1.getBalance()); //30
wallet1.withdraw(150); //снимеме больше денег
console.log(wallet1.getBalance()); //No enouhg funds