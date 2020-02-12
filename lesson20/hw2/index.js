export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get forSaveId() { // геттер только чтение
        return this._id;
    }
    get forSaveName() { // геттер только чтение
        return this._name;
    }
    get forSavesessionId() { // геттер только чтение
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users)
    }
    get forUser() { // геттер только чтение
        return this.user;
    }

    getUserNames() {
        return this._name;
    }
    getUserIds() {
        return this._id;
    }
    getUserNameById() {
        return this._sessionId
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