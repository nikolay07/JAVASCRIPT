export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() { // используем геттер только на чтение id пользователей
        return this._id;
    }
    get name() { // используем геттер только на чтение свойства имен пользователей
        return this._name;
    }
    get sessionId() { // используем геттер только на чтение свойства sessionId
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users); // запрещаем изменения в массиве пользователей
    }
    get users() { // используем геттер только чтение массива пользователей
        return this._users;
    }

    getUserNames() {
        return this._users.map((a) => a.name); //получаем массив имен пользователей
    }
    getUserIds() {
        return this._users.map((a) => a.id); //получаем массив id пользователей
    }
    getUserNameById(id) {
        for (let i of this._users) { //получаем имя пользователя по id
            if (i.id === this._users.id)
                return i.name;
        }
    }

}
const newUser = new User('133', 'Tom', '1234');
const newUser1 = new User('133', 'Bob', '1224');
console.log(newUser);
console.log(newUser1);
const newUs = new UserRepository([User]);
console.log(newUs);
/*
User repository

Создайте класс User и UserRepository - коллекцию пользователей
Основные требования:
1. Создать класс User c полями
id - string
name - string - имя пользователя
sessionId - string
2. Конструктор должен принимать параметры в том порядке, как они указаны выше. Также
возможность модификации полей должна быть закрыта, но возможность их считывания нет
(используйте ключевое слово get)
3. Создать класс UserRepository c полями
users - array[User] - массив объектов пользователей
4. Поле инициализируется в конструкторе (входящим массивом. Возможность модификации
поля из других классов должна быть закрыта, но возможность чтения открыта (используйте
ключевое слово get). Чтобы запретить мутацию массива, используйте метод Object.freeze
5. Создать методы ниже
6. getUserNames() - для получения массива имен пользователей
7. getUserIds() - - для получения массива айдишников пользователей
8. getUserNameById() - для получения имени пользователя, по его id



*/