class Order {
    constructor(price, city, type) {
        id = Math.random().toString();
        this.price = price;
        dateCreated = new Date();
        isConfirmed = false;
        dateConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        return this.price > 1000 ? true : false;
    }
    confirmOrder() {
        if (!this.isConfirmed) {
            this.isConfirmed = true;
        }
        this.dateCreated = new Date();

    }
    isValidType() {
        return this.type === Buy || this.type === Sell ? true : false
    }
}



/*Order класс

Представьте что вы разрабатываете ресурс, где люди могут заключать сделки по продажепокупке недвижимости.
Для такого ресурса нужно будет создать сущность (класс) Order, которая будет отображать и
хранить данные о сделках.
Создайте этот класс и добавьте в него следующее.
Основные требования:
1. Создать класс Order c полями
id - string - генерируется при создании экземполяра класса (можно использовать
Math.random() приведенный к строке)
price - number - цена сделки
dateCreated - Date - время создания сделки
isConfirmed - bool - сделка подтверждена / не подтверждена
dateConfirmed - Date - дата подтверждения сделки
city - string - место проведения сделки
type - string - тип сделки
2. Конструктор должен принимать нужные параметры - price, city, type. ID проставляется
рандомный. По-умолчаний заказ не подтвержден
3. Создать методы ниже
4. checkPrice() - должен возвращать true если цена сделки больше 1000 и false в другом случае
5. confirmOrder() - должен проставлять ордер в статус confirmed = true (если заказ не был
подтвержден раньше) и дату конфирма ставить в текущую
6. isValidType() - type поле может принимать только два значения - Buy, Sell - метод возвращает
true если это требование выполняется и false если нет */