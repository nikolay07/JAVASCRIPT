export class Order {
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = (Math.random()).toString();
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = 0;
    }

    checkPrice() {
        return this.price > 1000 ? true : false;
    }
    confirmOrder() {
        if (!this.isConfirmed) {
            this.isConfirmed = true;
        }
        this.dateConfirmed = new Date();

    }
    isValidType() {
        return (this.type === 'Buy' || this.type === 'Sell') ? true : false
    }
}
const newBuy = new Order(200000, 'Kyiv', 'Buy');
console.log(newBuy);


/*Order класс

 */